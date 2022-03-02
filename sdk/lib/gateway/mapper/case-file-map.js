"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CaseFileMap = void 0;
var _1 = require(".");
var CaseFileMap = (function () {
    function CaseFileMap() {
    }
    CaseFileMap.responseCaseFileMapper = function (responseModel) {
        var list = responseModel.results;
        var files = list.map(function transform(caseFile) {
            return _1.UploadFilesMap.fromBTUploadFiles(caseFile);
        });
        automapper
            .createMap('BTCaseFileResponse', 'CaseFileResponse')
            .forMember('currentServerTime', function (opts) {
            return opts.mapFrom('current_server_time');
        })
            .forMember('results', files);
        return automapper.map('BTCaseFileResponse', 'CaseFileResponse', responseModel);
    };
    CaseFileMap.toBTCaseFileUploadModel = function (model) {
        automapper.createMap('BTCaseFileUpload', 'CaseFileUpload').forMember('file', model.file);
        return automapper.map('BTCaseFileUpload', 'CaseFileUpload', model);
    };
    CaseFileMap.toCaseFileDataModel = function (fileId) {
        automapper.createMap('BTCaseFileData', 'CaseFileData').forMember('file_id', fileId);
        return automapper.map('BTCaseFileData', 'CaseFileData', {});
    };
    CaseFileMap.toCaseFileQueryModel = function (fileTag) {
        automapper.createMap('BTCaseFileTag', 'CaseFileTag').forMember('file_tag', fileTag);
        return automapper.map('BTCaseFileTag', 'CaseFileTag', {});
    };
    return CaseFileMap;
}());
exports.CaseFileMap = CaseFileMap;
//# sourceMappingURL=case-file-map.js.map