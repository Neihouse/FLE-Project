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
exports.id = "pages/api/seed";
exports.ids = ["pages/api/seed"];
exports.modules = {

/***/ "dotenv":
/*!*************************!*\
  !*** external "dotenv" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("dotenv");

/***/ }),

/***/ "mongodb":
/*!**************************!*\
  !*** external "mongodb" ***!
  \**************************/
/***/ ((module) => {

module.exports = require("mongodb");

/***/ }),

/***/ "@faker-js/faker":
/*!**********************************!*\
  !*** external "@faker-js/faker" ***!
  \**********************************/
/***/ ((module) => {

module.exports = import("@faker-js/faker");;

/***/ }),

/***/ "(api)/./pages/api/seed.ts":
/*!***************************!*\
  !*** ./pages/api/seed.ts ***!
  \***************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var scripts_setup_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! scripts/setup.mjs */ \"(api)/./scripts/setup.mjs\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([scripts_setup_mjs__WEBPACK_IMPORTED_MODULE_0__]);\nscripts_setup_mjs__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\nasync function handler(_req, res) {\n    const message = await (0,scripts_setup_mjs__WEBPACK_IMPORTED_MODULE_0__.setup)();\n    if (message) {\n        res.status(500).json({\n            error: {\n                message\n            }\n        });\n    } else {\n        await res.revalidate(`/`);\n        res.status(200).send(\"ok.\");\n    }\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (handler);\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvc2VlZC50cy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUMwQztBQUUxQyxlQUFlQyxRQUFRQyxJQUFvQixFQUFFQyxHQUFvQixFQUFFO0lBQ2pFLE1BQU1DLFVBQVUsTUFBTUosd0RBQUtBO0lBRTNCLElBQUlJLFNBQVM7UUFDWEQsSUFBSUUsTUFBTSxDQUFDLEtBQUtDLElBQUksQ0FBQztZQUNuQkMsT0FBTztnQkFBRUg7WUFBUTtRQUNuQjtJQUNGLE9BQU87UUFDTCxNQUFNRCxJQUFJSyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDeEJMLElBQUlFLE1BQU0sQ0FBQyxLQUFLSSxJQUFJLENBQUM7SUFDdkIsQ0FBQztBQUNIO0FBRUEsaUVBQWVSLE9BQU9BLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9hcGkvc2VlZC50cz85MDY2Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB0eXBlIHsgTmV4dEFwaVJlcXVlc3QsIE5leHRBcGlSZXNwb25zZSB9IGZyb20gJ25leHQnO1xuaW1wb3J0IHsgc2V0dXAgfSBmcm9tICdzY3JpcHRzL3NldHVwLm1qcyc7XG5cbmFzeW5jIGZ1bmN0aW9uIGhhbmRsZXIoX3JlcTogTmV4dEFwaVJlcXVlc3QsIHJlczogTmV4dEFwaVJlc3BvbnNlKSB7XG4gIGNvbnN0IG1lc3NhZ2UgPSBhd2FpdCBzZXR1cCgpO1xuXG4gIGlmIChtZXNzYWdlKSB7XG4gICAgcmVzLnN0YXR1cyg1MDApLmpzb24oe1xuICAgICAgZXJyb3I6IHsgbWVzc2FnZSB9XG4gICAgfSk7XG4gIH0gZWxzZSB7XG4gICAgYXdhaXQgcmVzLnJldmFsaWRhdGUoYC9gKTtcbiAgICByZXMuc3RhdHVzKDIwMCkuc2VuZCgnb2suJyk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgaGFuZGxlcjtcbiJdLCJuYW1lcyI6WyJzZXR1cCIsImhhbmRsZXIiLCJfcmVxIiwicmVzIiwibWVzc2FnZSIsInN0YXR1cyIsImpzb24iLCJlcnJvciIsInJldmFsaWRhdGUiLCJzZW5kIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./pages/api/seed.ts\n");

/***/ }),

/***/ "(api)/./scripts/setup.mjs":
/*!***************************!*\
  !*** ./scripts/setup.mjs ***!
  \***************************/
/***/ ((__webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(__webpack_module__, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"setup\": () => (/* binding */ setup)\n/* harmony export */ });\n/* harmony import */ var mongodb__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongodb */ \"mongodb\");\n/* harmony import */ var _faker_js_faker__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @faker-js/faker */ \"@faker-js/faker\");\n/* harmony import */ var dotenv__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! dotenv */ \"dotenv\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_faker_js_faker__WEBPACK_IMPORTED_MODULE_1__]);\n_faker_js_faker__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\n\ndotenv__WEBPACK_IMPORTED_MODULE_2__.config();\nconst setup = async ()=>{\n    let client;\n    try {\n        client = new mongodb__WEBPACK_IMPORTED_MODULE_0__.MongoClient(process.env.MONGODB_URI);\n        await client.connect();\n        const hasData = await client.db(\"test\").collection(\"users\").countDocuments();\n        if (hasData) {\n            console.log(\"Database already exists with data\");\n            client.close();\n            return;\n        }\n        const records = [\n            ...Array(10)\n        ].map(()=>{\n            const [fName, lName] = _faker_js_faker__WEBPACK_IMPORTED_MODULE_1__.faker.name.findName().split(\" \");\n            const username = _faker_js_faker__WEBPACK_IMPORTED_MODULE_1__.faker.internet.userName(fName, lName);\n            const email = _faker_js_faker__WEBPACK_IMPORTED_MODULE_1__.faker.internet.email(fName, lName);\n            const image = _faker_js_faker__WEBPACK_IMPORTED_MODULE_1__.faker.image.people(640, 480, true);\n            return {\n                name: `${fName} ${lName}`,\n                username,\n                email,\n                image,\n                followers: 0,\n                emailVerified: null\n            };\n        });\n        const insert = await client.db(\"test\").collection(\"users\").insertMany(records);\n        if (insert.acknowledged) {\n            console.log(\"Successfully inserted records\");\n        }\n    } catch (error) {\n        return \"Database is not ready yet\";\n    } finally{\n        if (client) {\n            await client.close();\n        }\n    }\n};\ntry {\n    setup();\n} catch  {\n    console.warn(\"Database is not ready yet. Skipping seeding...\");\n}\n\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9zY3JpcHRzL3NldHVwLm1qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQXNDO0FBQ0U7QUFDWjtBQUU1QkUsMENBQWE7QUFFYixNQUFNRSxRQUFRLFVBQVk7SUFDeEIsSUFBSUM7SUFFSixJQUFJO1FBQ0ZBLFNBQVMsSUFBSUwsZ0RBQVdBLENBQUNNLFFBQVFDLEdBQUcsQ0FBQ0MsV0FBVztRQUNoRCxNQUFNSCxPQUFPSSxPQUFPO1FBRXBCLE1BQU1DLFVBQVUsTUFBTUwsT0FDbkJNLEVBQUUsQ0FBQyxRQUNIQyxVQUFVLENBQUMsU0FDWEMsY0FBYztRQUVqQixJQUFJSCxTQUFTO1lBQ1hJLFFBQVFDLEdBQUcsQ0FBQztZQUNaVixPQUFPVyxLQUFLO1lBQ1o7UUFDRixDQUFDO1FBRUQsTUFBTUMsVUFBVTtlQUFJQyxNQUFNO1NBQUksQ0FBQ0MsR0FBRyxDQUFDLElBQU07WUFDdkMsTUFBTSxDQUFDQyxPQUFPQyxNQUFNLEdBQUdwQixnRUFBbUIsR0FBR3VCLEtBQUssQ0FBQztZQUNuRCxNQUFNQyxXQUFXeEIsb0VBQXVCLENBQUNtQixPQUFPQztZQUNoRCxNQUFNTyxRQUFRM0IsaUVBQW9CLENBQUNtQixPQUFPQztZQUMxQyxNQUFNUSxRQUFRNUIsK0RBQWtCLENBQUMsS0FBSyxLQUFLLElBQUk7WUFFL0MsT0FBTztnQkFDTHFCLE1BQU0sQ0FBQyxFQUFFRixNQUFNLENBQUMsRUFBRUMsTUFBTSxDQUFDO2dCQUN6Qkk7Z0JBQ0FHO2dCQUNBQztnQkFDQUUsV0FBVztnQkFDWEMsZUFBZSxJQUFJO1lBQ3JCO1FBQ0Y7UUFFQSxNQUFNQyxTQUFTLE1BQU01QixPQUNsQk0sRUFBRSxDQUFDLFFBQ0hDLFVBQVUsQ0FBQyxTQUNYc0IsVUFBVSxDQUFDakI7UUFFZCxJQUFJZ0IsT0FBT0UsWUFBWSxFQUFFO1lBQ3ZCckIsUUFBUUMsR0FBRyxDQUFDO1FBQ2QsQ0FBQztJQUNILEVBQUUsT0FBT3FCLE9BQU87UUFDZCxPQUFPO0lBQ1QsU0FBVTtRQUNSLElBQUkvQixRQUFRO1lBQ1YsTUFBTUEsT0FBT1csS0FBSztRQUNwQixDQUFDO0lBQ0g7QUFDRjtBQUVBLElBQUk7SUFDRlo7QUFDRixFQUFFLE9BQU07SUFDTlUsUUFBUXVCLElBQUksQ0FBQztBQUNmO0FBRWlCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vc2NyaXB0cy9zZXR1cC5tanM/YjQwOCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBNb25nb0NsaWVudCB9IGZyb20gJ21vbmdvZGInO1xuaW1wb3J0IHsgZmFrZXIgfSBmcm9tICdAZmFrZXItanMvZmFrZXInO1xuaW1wb3J0IGRvdGVudiBmcm9tICdkb3RlbnYnO1xuXG5kb3RlbnYuY29uZmlnKCk7XG5cbmNvbnN0IHNldHVwID0gYXN5bmMgKCkgPT4ge1xuICBsZXQgY2xpZW50O1xuXG4gIHRyeSB7XG4gICAgY2xpZW50ID0gbmV3IE1vbmdvQ2xpZW50KHByb2Nlc3MuZW52Lk1PTkdPREJfVVJJKTtcbiAgICBhd2FpdCBjbGllbnQuY29ubmVjdCgpO1xuXG4gICAgY29uc3QgaGFzRGF0YSA9IGF3YWl0IGNsaWVudFxuICAgICAgLmRiKCd0ZXN0JylcbiAgICAgIC5jb2xsZWN0aW9uKCd1c2VycycpXG4gICAgICAuY291bnREb2N1bWVudHMoKTtcblxuICAgIGlmIChoYXNEYXRhKSB7XG4gICAgICBjb25zb2xlLmxvZygnRGF0YWJhc2UgYWxyZWFkeSBleGlzdHMgd2l0aCBkYXRhJyk7XG4gICAgICBjbGllbnQuY2xvc2UoKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zdCByZWNvcmRzID0gWy4uLkFycmF5KDEwKV0ubWFwKCgpID0+IHtcbiAgICAgIGNvbnN0IFtmTmFtZSwgbE5hbWVdID0gZmFrZXIubmFtZS5maW5kTmFtZSgpLnNwbGl0KCcgJyk7XG4gICAgICBjb25zdCB1c2VybmFtZSA9IGZha2VyLmludGVybmV0LnVzZXJOYW1lKGZOYW1lLCBsTmFtZSk7XG4gICAgICBjb25zdCBlbWFpbCA9IGZha2VyLmludGVybmV0LmVtYWlsKGZOYW1lLCBsTmFtZSk7XG4gICAgICBjb25zdCBpbWFnZSA9IGZha2VyLmltYWdlLnBlb3BsZSg2NDAsIDQ4MCwgdHJ1ZSk7XG5cbiAgICAgIHJldHVybiB7XG4gICAgICAgIG5hbWU6IGAke2ZOYW1lfSAke2xOYW1lfWAsXG4gICAgICAgIHVzZXJuYW1lLFxuICAgICAgICBlbWFpbCxcbiAgICAgICAgaW1hZ2UsXG4gICAgICAgIGZvbGxvd2VyczogMCxcbiAgICAgICAgZW1haWxWZXJpZmllZDogbnVsbFxuICAgICAgfTtcbiAgICB9KTtcblxuICAgIGNvbnN0IGluc2VydCA9IGF3YWl0IGNsaWVudFxuICAgICAgLmRiKCd0ZXN0JylcbiAgICAgIC5jb2xsZWN0aW9uKCd1c2VycycpXG4gICAgICAuaW5zZXJ0TWFueShyZWNvcmRzKTtcblxuICAgIGlmIChpbnNlcnQuYWNrbm93bGVkZ2VkKSB7XG4gICAgICBjb25zb2xlLmxvZygnU3VjY2Vzc2Z1bGx5IGluc2VydGVkIHJlY29yZHMnKTtcbiAgICB9XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgcmV0dXJuICdEYXRhYmFzZSBpcyBub3QgcmVhZHkgeWV0JztcbiAgfSBmaW5hbGx5IHtcbiAgICBpZiAoY2xpZW50KSB7XG4gICAgICBhd2FpdCBjbGllbnQuY2xvc2UoKTtcbiAgICB9XG4gIH1cbn07XG5cbnRyeSB7XG4gIHNldHVwKCk7XG59IGNhdGNoIHtcbiAgY29uc29sZS53YXJuKCdEYXRhYmFzZSBpcyBub3QgcmVhZHkgeWV0LiBTa2lwcGluZyBzZWVkaW5nLi4uJyk7XG59XG5cbmV4cG9ydCB7IHNldHVwIH07XG4iXSwibmFtZXMiOlsiTW9uZ29DbGllbnQiLCJmYWtlciIsImRvdGVudiIsImNvbmZpZyIsInNldHVwIiwiY2xpZW50IiwicHJvY2VzcyIsImVudiIsIk1PTkdPREJfVVJJIiwiY29ubmVjdCIsImhhc0RhdGEiLCJkYiIsImNvbGxlY3Rpb24iLCJjb3VudERvY3VtZW50cyIsImNvbnNvbGUiLCJsb2ciLCJjbG9zZSIsInJlY29yZHMiLCJBcnJheSIsIm1hcCIsImZOYW1lIiwibE5hbWUiLCJuYW1lIiwiZmluZE5hbWUiLCJzcGxpdCIsInVzZXJuYW1lIiwiaW50ZXJuZXQiLCJ1c2VyTmFtZSIsImVtYWlsIiwiaW1hZ2UiLCJwZW9wbGUiLCJmb2xsb3dlcnMiLCJlbWFpbFZlcmlmaWVkIiwiaW5zZXJ0IiwiaW5zZXJ0TWFueSIsImFja25vd2xlZGdlZCIsImVycm9yIiwid2FybiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./scripts/setup.mjs\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/seed.ts"));
module.exports = __webpack_exports__;

})();