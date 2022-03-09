"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomerMetaMap = void 0;
var CustomerMetaMap = (function () {
    function CustomerMetaMap() {
    }
    CustomerMetaMap.mapper = function (model) {
        automapper
            .createMap('btCustomerMeta', 'customerMeta')
            .forMember('currentServerTime', function (opts) {
            return opts.mapFrom('current_server_time');
        });
        return automapper.map('btCustomerMeta', 'customerMeta', model);
    };
    return CustomerMetaMap;
}());
exports.CustomerMetaMap = CustomerMetaMap;
//# sourceMappingURL=customer-meta-map.js.map