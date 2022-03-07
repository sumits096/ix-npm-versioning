"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Credential = exports.BoomtownProviders = void 0;
require("reflect-metadata");
var BoomtownProviders = function (token, secret) {
    new Credential().setTokenSecret(token, secret);
    return [];
};
exports.BoomtownProviders = BoomtownProviders;
var Credential = (function () {
    function Credential() {
    }
    Credential.prototype.setTokenSecret = function (token, secret) {
        Credential.token = token;
        Credential.secret = secret;
    };
    Credential.token = '';
    Credential.secret = '';
    return Credential;
}());
exports.Credential = Credential;
//# sourceMappingURL=index.js.map