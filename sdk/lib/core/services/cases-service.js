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
exports.CasesService = void 0;
var typedi_1 = require("typedi");
var CasesService = (function () {
    function CasesService(casesRepository) {
        this.casesRepository = casesRepository;
    }
    CasesService.prototype.get = function (listOptions) {
        return this.casesRepository.get(listOptions);
    };
    CasesService.prototype.getById = function (id) {
        return this.casesRepository.getById(id);
    };
    CasesService.prototype.post = function (casesCreateRequest) {
        return this.casesRepository.post(casesCreateRequest);
    };
    CasesService.prototype.schedule = function (caseId, scheduledTime) {
        return this.casesRepository.schedule(caseId, scheduledTime);
    };
    CasesService.prototype.cancelSchedule = function (caseId) {
        return this.casesRepository.cancelSchedule(caseId);
    };
    CasesService.prototype.resolve = function (caseId) {
        return this.casesRepository.resolve(caseId);
    };
    CasesService.prototype.escalate = function (caseId, caseEscalateOptions) {
        return this.casesRepository.escalate(caseId, caseEscalateOptions);
    };
    CasesService.prototype.deEscalate = function (caseId, caseDeEscalateOptions) {
        return this.casesRepository.deEscalate(caseId, caseDeEscalateOptions);
    };
    CasesService.prototype.cancel = function (caseId) {
        return this.casesRepository.cancel(caseId);
    };
    CasesService.prototype.getStatusHistory = function (caseId) {
        return this.casesRepository.getStatusHistory(caseId);
    };
    CasesService.prototype.getChatHistory = function (caseId) {
        return this.casesRepository.getChatHistory(caseId);
    };
    CasesService = __decorate([
        (0, typedi_1.Service)(),
        __metadata("design:paramtypes", [Object])
    ], CasesService);
    return CasesService;
}());
exports.CasesService = CasesService;
//# sourceMappingURL=cases-service.js.map