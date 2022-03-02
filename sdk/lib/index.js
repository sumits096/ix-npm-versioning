"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Credential = exports.BoomtownProviders = void 0;
require("reflect-metadata");
var customer_1 = require("./api/controllers/customer");
var customer_service_1 = require("./core/services/customer-service");
var boomtown_client_1 = require("./gateway/client/boomtown-client");
var repositories_1 = require("./gateway/repositories");
var BoomtownProviders = function (token, secret) {
    new Credential().setTokenSecret(token, secret);
    return [
        { provide: customer_1.Customer, deps: [customer_service_1.CustomerService] },
        { provide: customer_service_1.CustomerService, deps: [repositories_1.CustomerRepository] },
        { provide: repositories_1.CustomerRepository, deps: [boomtown_client_1.BoomtownClient] },
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