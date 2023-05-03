"use strict";
(() => {
var exports = {};
exports.id = 453;
exports.ids = [453];
exports.modules = {

/***/ 275:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const handler = async (req, res)=>{
    const { method  } = req;
    switch(method){
        case "GET":
            res.status(200).json("HelloWorld World");
            break;
        case "POST":
            // const body = JSON.parse(req.body);
            res.status(201).json("HelloWorld World POST");
            break;
        default:
            res.setHeader("Allow", [
                "GET",
                "POST"
            ]);
            res.status(405).end(`Method ${method} Not Allowed`);
    }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (handler);


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(275));
module.exports = __webpack_exports__;

})();