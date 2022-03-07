"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Credential = exports.BoomtownProviders = void 0;
require("reflect-metadata");
var controllers_1 = require("./api/controllers");
var services_1 = require("./core/services");
var boomtown_client_1 = require("./gateway/client/boomtown-client");
var repositories_1 = require("./gateway/repositories");
var request_handler_1 = require("./gateway/request-handler");
var BoomtownProviders = function (token, secret) {
    new Credential().setTokenSecret(token, secret);
    return [
        { provide: controllers_1.Customer, useClass: [services_1.CustomerService] },
        { provide: services_1.CustomerService, useClass: [repositories_1.CustomerRepository] },
        { provide: repositories_1.CustomerRepository, useClass: [boomtown_client_1.BoomtownClient] },
        { provide: boomtown_client_1.BoomtownClient, useClass: [request_handler_1.AxiosHandler] },
    ];
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