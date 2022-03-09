"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ResponseMap = void 0;
var ResponseMap = (function () {
    function ResponseMap() {
    }
    ResponseMap.response = function (model) {
        automapper
            .createMap('BTResponse', 'Response')
            .forMember('currentServerTime', function (opts) {
            return opts.mapFrom('current_server_time');
        });
        return automapper.map('BTResponse', 'Response', model);
    };
    return ResponseMap;
}());
exports.ResponseMap = ResponseMap;
//# sourceMappingURL=response-map.js.map