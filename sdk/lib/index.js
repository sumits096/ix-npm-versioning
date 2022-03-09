"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BoomtownModule = exports.Credential = exports.BoomtownProviders = void 0;
var common_1 = require("@nestjs/common");
require("reflect-metadata");
var controllers_1 = require("./api/controllers");
var services_1 = require("./core/services");
var boomtown_client_1 = require("./gateway/client/boomtown-client");
var repositories_1 = require("./gateway/repositories");
var request_handler_1 = require("./gateway/request-handler");
var BoomtownProviders = function (token, secret) {
    new Credential().setTokenSecret(token, secret);
    return [
        request_handler_1.AxiosHandler,
        { provide: controllers_1.Customer, deps: [services_1.CustomerService] },
        { provide: services_1.CustomerService, deps: [repositories_1.CustomerRepository] },
        { provide: repositories_1.CustomerRepository, deps: [boomtown_client_1.BoomtownClient] },
        { provide: boomtown_client_1.BoomtownClient, deps: [request_handler_1.AxiosHandler] },
    ];
};
exports.BoomtownProviders = BoomtownProviders;
var Credential = (function () {
    function Credential() {
    }
    Credential.prototype.setTokenSecret = function (token, secret) {
        Credential.token = token;
        Credential.secret = secret;
        console.log(token);
    };
    Credential.token = '';
    Credential.secret = '';
    return Credential;
}());
exports.Credential = Credential;
var BoomtownModule = (function () {
    function BoomtownModule() {
    }
    BoomtownModule_1 = BoomtownModule;
    BoomtownModule.register = function (token, secret) {
        new Credential().setTokenSecret(token, secret);
        return {
            module: BoomtownModule_1,
            providers: [
                controllers_1.Customer,
                request_handler_1.AxiosHandler,
                {
                    provide: 'CustomerService',
                    useClass: services_1.CustomerService,
                },
                {
                    provide: 'CustomerRepository',
                    useClass: repositories_1.CustomerRepository,
                },
                {
                    provide: 'BoomtownClient',
                    useClass: boomtown_client_1.BoomtownClient,
                },
                {
                    provide: 'AxiosHandler',
                    useClass: request_handler_1.AxiosHandler,
                },
            ],
            exports: [controllers_1.Customer],
        };
    };
    var BoomtownModule_1;
    BoomtownModule = BoomtownModule_1 = __decorate([
        (0, common_1.Module)({})
    ], BoomtownModule);
    return BoomtownModule;
}());
exports.BoomtownModule = BoomtownModule;
//# sourceMappingURL=index.js.map