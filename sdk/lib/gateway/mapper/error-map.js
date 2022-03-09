"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ErrorMap = void 0;
var ErrorMap = (function () {
    function ErrorMap() {
    }
    ErrorMap.error = function (errorModel) {
        automapper
            .createMap('BTError', 'Error')
            .forMember('currentServerTime', function (opts) {
            return opts.mapFrom('current_server_time');
        });
        return automapper.map('BTError', 'Error', errorModel);
    };
    return ErrorMap;
}());
exports.ErrorMap = ErrorMap;
//# sourceMappingURL=error-map.js.map