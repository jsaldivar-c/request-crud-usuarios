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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _js_usuarios_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./js/usuarios-page */ \"./src/js/usuarios-page.js\");\n/* harmony import */ var _js_crud_provider__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./js/crud-provider */ \"./src/js/crud-provider.js\");\n\n\n\n// Usuario obtenido\n_js_crud_provider__WEBPACK_IMPORTED_MODULE_1__[\"getUsuario\"](3).then(console.log);\n\n// Usuario creado\n_js_crud_provider__WEBPACK_IMPORTED_MODULE_1__[\"crearUsuario\"]({\n    name: 'José',\n    job: 'Herrero'\n}).then(console.log);\n\n// Usuario actualizado\n_js_crud_provider__WEBPACK_IMPORTED_MODULE_1__[\"actualizarUsuario\"](2, {\n    name: 'Ytana',\n    job: 'Actriz'\n}).then(console.log);\n\n// Usuario eliminado\n_js_crud_provider__WEBPACK_IMPORTED_MODULE_1__[\"eliminarUsuario\"](6).then(console.log);\n\nObject(_js_usuarios_page__WEBPACK_IMPORTED_MODULE_0__[\"init\"])();\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/js/crud-provider.js":
/*!*********************************!*\
  !*** ./src/js/crud-provider.js ***!
  \*********************************/
/*! exports provided: getUsuario, crearUsuario, actualizarUsuario, eliminarUsuario */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getUsuario\", function() { return getUsuario; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"crearUsuario\", function() { return crearUsuario; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"actualizarUsuario\", function() { return actualizarUsuario; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"eliminarUsuario\", function() { return eliminarUsuario; });\nconst urlCRUD = 'https://reqres.in/api/users';\r\n\r\nconst getUsuario = async(id) => {\r\n\r\n    const resp = await fetch(`${urlCRUD}/${id}`);\r\n    const { data } = await resp.json();\r\n    console.warn('Usuario obtenido');\r\n    return data;\r\n};\r\n\r\nconst crearUsuario = async(usuario) => {\r\n\r\n    const resp = await fetch(urlCRUD, {\r\n        method: 'POST',\r\n        body: JSON.stringify(usuario),\r\n        headers: {\r\n            'Content-Type': 'application/json'\r\n        }\r\n    });\r\n    console.warn('Usuario creado');\r\n    return await resp.json();\r\n};\r\n\r\nconst actualizarUsuario = async(id, usuario) => {\r\n\r\n    const resp = await fetch(`${urlCRUD}/${id}`, {\r\n\r\n        method: 'PUT',\r\n        body: JSON.stringify(usuario),\r\n        headers: {\r\n            'Content-Type': 'application/json'\r\n        }\r\n    });\r\n    console.warn('Usuario actualizado');\r\n    return await resp.json();\r\n};\r\n\r\nconst eliminarUsuario = async(id) => {\r\n\r\n    const resp = await fetch(`${urlCRUD}/${id}`, {\r\n        method: 'DELETE',\r\n    });\r\n    console.warn('Usuario borrado');\r\n    return await (resp.ok) ? 'Borrado' : 'No se puedo borrar';\r\n};\r\n\r\n\n\n//# sourceURL=webpack:///./src/js/crud-provider.js?");

/***/ }),

/***/ "./src/js/http-provider.js":
/*!*********************************!*\
  !*** ./src/js/http-provider.js ***!
  \*********************************/
/*! exports provided: obtenerUsuarios */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"obtenerUsuarios\", function() { return obtenerUsuarios; });\nconst usuariosUrl = 'https://reqres.in/api/users?page=2';\r\n\r\nconst obtenerUsuarios = async() => {\r\n\r\n    const resp = await fetch(usuariosUrl);\r\n    const { data: usuarios } = await resp.json();\r\n\r\n    return usuarios;\r\n};\r\n\r\n\r\n\n\n//# sourceURL=webpack:///./src/js/http-provider.js?");

/***/ }),

/***/ "./src/js/usuarios-page.js":
/*!*********************************!*\
  !*** ./src/js/usuarios-page.js ***!
  \*********************************/
/*! exports provided: init */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"init\", function() { return init; });\n/* harmony import */ var _http_provider__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./http-provider */ \"./src/js/http-provider.js\");\n\n\nconst body = document.body;\nlet tBody;\nlet correlativo = 0;\n\nconst crearHtml = () => {\n\n    const html = `\n    <h1 class=\"mt-5 mb-5 display-4\"> Lista de Usuarios</h1>\n    <table class=\"table\">\n        <thead>\n            <tr>\n                <th scope=\"col\">#</th>\n                <th scope=\"col\">Correo Electronico</th>\n                <th scope=\"col\">Nombre</th>\n                <th scope=\"col\">Avatar</th>\n            </tr>\n        </thead>\n        <tbody>\n        </tbody>\n    </table>\n    `;\n\n    const div = document.createElement('div');\n    div.innerHTML = html;\n    body.appendChild(div);\n\n    // Se crea una variable para mantener la referencia al tbody\n    tBody = document.querySelector('tbody');\n};\n\nconst crearFilaUsuario = (usuario) => {\n\n    correlativo++;\n\n    const html = `\n        <td scope=\"col\">${correlativo}</td>\n        <td scope=\"col\">${usuario.email}</td>\n        <td scope=\"col\">${usuario.first_name} ${usuario.last_name}</td>\n        <td scope=\"col\">\n            <img class=\"img-thumbnail\" src=\"${usuario.avatar}\">\n        </td>\n    `;\n\n    const tr = document.createElement('tr');\n    tr.innerHTML = html;\n\n    tBody.appendChild(tr);\n\n};\n\nconst init = async() => {\n\n    crearHtml();\n    correlativo = 0;\n    // Se obtiene la lista de usuarios usando el servicio creado en el provider.\n    (await Object(_http_provider__WEBPACK_IMPORTED_MODULE_0__[\"obtenerUsuarios\"])()).forEach(crearFilaUsuario);\n};\n\n//# sourceURL=webpack:///./src/js/usuarios-page.js?");

/***/ })

/******/ });