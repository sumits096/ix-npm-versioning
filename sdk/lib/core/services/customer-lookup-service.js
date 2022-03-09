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
exports.CustomerLookupService = void 0;
var typedi_1 = require("typedi");
var CustomerLookupService = (function () {
    function CustomerLookupService(customerLookupRepository) {
        this.customerLookupRepository = customerLookupRepository;
    }
    CustomerLookupService.prototype.getLookupByIssueId = function (issueId) {
        return this.customerLookupRepository.getLookupByIssueId(issueId);
    };
    CustomerLookupService.prototype.getLookupById = function (customerUserId) {
        return this.customerLookupRepository.getLookupById(customerUserId);
    };
    CustomerLookupService.prototype.getLookupByEmail = function (customerUserEmail) {
        return this.customerLookupRepository.getLookupByEmail(customerUserEmail);
    };
    CustomerLookupService.prototype.getLookupByExternalId = function (externalId) {
        return this.customerLookupRepository.getLookupByExternalId(externalId);
    };
    CustomerLookupService = __decorate([
        (0, typedi_1.Service)(),
        __metadata("design:paramtypes", [Object])
    ], CustomerLookupService);
    return CustomerLookupService;
}());
exports.CustomerLookupService = CustomerLookupService;
//# sourceMappingURL=customer-lookup-service.js.map