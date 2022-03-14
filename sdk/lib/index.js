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
var customer_1 = require("./api/controllers/customer");
var services_1 = require("./core/services");
var customer_service_1 = require("./core/services/customer-service");
var boomtown_client_1 = require("./gateway/client/boomtown-client");
var repositories_1 = require("./gateway/repositories");
var request_handler_1 = require("./gateway/request-handler");
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
var BoomtownModule = (function () {
    function BoomtownModule() {
    }
    BoomtownModule_1 = BoomtownModule;
    BoomtownModule.register = function (token, secret) {
        new Credential().setTokenSecret(token, secret);
        return {
            module: BoomtownModule_1,
            providers: [
                customer_1.Customer,
                controllers_1.CustomerMeta,
                controllers_1.CustomerLookup,
                controllers_1.CustomerLocation,
                controllers_1.CustomerContact,
                controllers_1.Cases,
                controllers_1.CaseMeta,
                controllers_1.CaseLog,
                controllers_1.CaseFile,
                request_handler_1.AxiosHandler,
                {
                    provide: 'CustomerService',
                    useClass: customer_service_1.CustomerService,
                },
                {
                    provide: 'CustomerRepository',
                    useClass: repositories_1.CustomerRepository,
                },
                {
                    provide: 'CustomerMetaService',
                    useClass: services_1.CustomerMetaService,
                },
                {
                    provide: 'CustomerMetaRepository',
                    useClass: repositories_1.CustomerMetaRepository,
                },
                {
                    provide: 'CustomerLookupService',
                    useClass: services_1.CustomerLookupService,
                },
                {
                    provide: 'CustomerLookupRepository',
                    useClass: repositories_1.CustomerLookupRepository,
                },
                {
                    provide: 'CustomerLocationService',
                    useClass: services_1.CustomerLocationService,
                },
                {
                    provide: 'CustomerLocationRepository',
                    useClass: repositories_1.CustomerLocationRepository,
                },
                {
                    provide: 'CustomerContactService',
                    useClass: services_1.CustomerContactService,
                },
                {
                    provide: 'CustomerContactRepository',
                    useClass: repositories_1.CustomerContactRepository,
                },
                {
                    provide: 'CasesService',
                    useClass: services_1.CasesService,
                },
                {
                    provide: 'CasesRepository',
                    useClass: repositories_1.CasesRepository,
                },
                {
                    provide: 'CaseMetaService',
                    useClass: services_1.CaseMetaService,
                },
                {
                    provide: 'CaseMetaRepository',
                    useClass: repositories_1.CaseMetaRepository,
                },
                {
                    provide: 'CaseLogService',
                    useClass: services_1.CaseLogService,
                },
                {
                    provide: 'CaseLogRepository',
                    useClass: repositories_1.CaseLogRepository,
                },
                {
                    provide: 'CaseFileService',
                    useClass: services_1.CaseFileService,
                },
                {
                    provide: 'CaseFileRepository',
                    useClass: repositories_1.CaseFileRepository,
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
            exports: [customer_1.Customer, controllers_1.CustomerMeta, controllers_1.CustomerLookup, controllers_1.CustomerLocation, controllers_1.CustomerContact, controllers_1.Cases, controllers_1.CaseMeta, controllers_1.CaseLog, controllers_1.CaseFile],
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