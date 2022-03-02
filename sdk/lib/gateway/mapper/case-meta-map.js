"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CaseMetaMap = void 0;
require("automapper-ts");
var CaseMetaMap = (function () {
    function CaseMetaMap() {
    }
    CaseMetaMap.mapper = function (model) {
        automapper
            .createMap('btCaseMeta', 'caseMeta')
            .forMember('currentServerTime', function (opts) {
            return opts.mapFrom('current_server_time');
        });
        return automapper.map('btCaseMeta', 'caseMeta', model);
    };
    return CaseMetaMap;
}());
exports.CaseMetaMap = CaseMetaMap;
//# sourceMappingURL=case-meta-map.js.map