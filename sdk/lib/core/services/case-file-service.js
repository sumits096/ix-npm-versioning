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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CaseFileService = void 0;
var common_1 = require("@nestjs/common");
var CaseFileService = (function () {
    function CaseFileService(caseFileRepository) {
        this.caseFileRepository = caseFileRepository;
    }
    CaseFileService.prototype.getByCaseId = function (caseId) {
        return this.caseFileRepository.getByCaseId(caseId);
    };
    CaseFileService.prototype.post = function (caseId, fileTag, file) {
        return this.caseFileRepository.post(caseId, fileTag, file);
    };
    CaseFileService.prototype.delete = function (caseId, fileId) {
        return this.caseFileRepository.delete(caseId, fileId);
    };
    CaseFileService = __decorate([
        (0, common_1.Injectable)(),
        __param(0, (0, common_1.Inject)('CaseFileRepository')),
        __metadata("design:paramtypes", [Object])
    ], CaseFileService);
    return CaseFileService;
}());
exports.CaseFileService = CaseFileService;
//# sourceMappingURL=case-file-service.js.map