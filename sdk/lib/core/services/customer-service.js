"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomerService = void 0;
var typedi_1 = require("typedi");
var CustomerService = (function () {
    function CustomerService(customerRepository) {
        this.customerRepository = customerRepository;
    }
    CustomerService.prototype.get = function (listOptions) {
        return this.customerRepository.get(listOptions);
    };
    CustomerService.prototype.getById = function (id) {
        return this.customerRepository.getById(id);
    };
    CustomerService.prototype.post = function (customerCreateRequest) {
        return this.customerRepository.post(customerCreateRequest);
    };
    CustomerService.prototype.delete = function (id) {
        return this.customerRepository.delete(id);
    };
    CustomerService.prototype.smsInvite = function (smsInviteData) {
        return this.customerRepository.smsInvite(smsInviteData);
    };
    CustomerService = __decorate([
        (0, typedi_1.Service)(),
        __metadata("design:paramtypes", [Object])
    ], CustomerService);
    return CustomerService;
}());
exports.CustomerService = CustomerService;
//# sourceMappingURL=customer-service.js.map