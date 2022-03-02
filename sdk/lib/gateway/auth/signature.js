"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.signature = void 0;
var crypto_js_1 = require("crypto-js");
var __1 = require("../..");
var Signature = (function () {
    function Signature() {
    }
    Signature.prototype.create = function (url, timestamp, queryParam) {
        var urlStr = new URL(url);
        var message = "".concat(urlStr.pathname, "?").concat(queryParam ? queryParam + '&' : '', "_=").concat(timestamp.getTime(), ":").concat(timestamp.toJSON());
        return (0, crypto_js_1.HmacSHA256)(message, __1.Credential.secret).toString(crypto_js_1.enc.Base64);
    };
    return Signature;
}());
exports.signature = new Signature();
//# sourceMappingURL=signature.js.map