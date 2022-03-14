"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UploadFilesMap = void 0;
require("automapper-ts");
var UploadFilesMap = (function () {
    function UploadFilesMap() {
    }
    UploadFilesMap.fromBTUploadFiles = function (model) {
        automapper
            .createMap('BTUploadFile', 'UploadFile')
            .forMember('objectId', function (opts) { return opts.mapFrom('object_id'); });
        return automapper.map('BTUploadFile', 'UploadFile', model);
    };
    UploadFilesMap.fromBTUploadFilesList = function (files) {
        var model = files ? files : [];
        return model.map(function transform(file) {
            return UploadFilesMap.fromBTUploadFiles(file);
        });
    };
    UploadFilesMap.toBTUploadFileModel = function (files) {
        var model = files ? files : [];
        return model.map(function transform(file) {
            return UploadFilesMap.toBTUploadFiles(file);
        });
    };
    UploadFilesMap.toBTUploadFiles = function (model) {
        automapper
            .createMap('UploadFile', 'BTUploadFile')
            .forMember('object_id', function (opts) { return opts.mapFrom('objectId'); });
        return automapper.map('UploadFile', 'UploadFile', model);
    };
    return UploadFilesMap;
}());
exports.UploadFilesMap = UploadFilesMap;
//# sourceMappingURL=upload-files-map.js.map