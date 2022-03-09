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
exports.CaseMetaService = void 0;
var typedi_1 = require("typedi");
var CaseMetaService = (function () {
    function CaseMetaService(caseMetaRepository) {
        this.caseMetaRepository = caseMetaRepository;
    }
    CaseMetaService.prototype.getStatuses = function () {
        return this.caseMetaRepository.getStatuses();
    };
    CaseMetaService.prototype.getJobs = function () {
        return this.caseMetaRepository.getJobs();
    };
    CaseMetaService.prototype.getCategories = function () {
        return this.caseMetaRepository.getCategories();
    };
    CaseMetaService.prototype.getCategoriesNew = function () {
        return this.caseMetaRepository.getCategoriesNew();
    };
    CaseMetaService.prototype.getTags = function () {
        return this.caseMetaRepository.getTags();
    };
    CaseMetaService.prototype.getTypes = function () {
        return this.caseMetaRepository.getTypes();
    };
    CaseMetaService.prototype.getFileTags = function () {
        return this.caseMetaRepository.getFileTags();
    };
    CaseMetaService.prototype.getResolutions = function () {
        return this.caseMetaRepository.getResolutions();
    };
    CaseMetaService = __decorate([
        (0, typedi_1.Service)(),
        __metadata("design:paramtypes", [Object])
    ], CaseMetaService);
    return CaseMetaService;
}());
exports.CaseMetaService = CaseMetaService;
//# sourceMappingURL=case-meta-service.js.map