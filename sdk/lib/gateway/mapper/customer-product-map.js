"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomerProductMap = void 0;
var CustomerProductMap = (function () {
    function CustomerProductMap() {
    }
    CustomerProductMap.fromBTProducts = function (model) {
        automapper
            .createMap('BTCustomerProductSummary', 'CustomerProductSummary')
            .forMember('parentId', function (opts) { return opts.mapFrom('parent_id'); })
            .forMember('lastChecked', function (opts) { return opts.mapFrom('last_checked'); })
            .forMember('lastSeen', function (opts) { return opts.mapFrom('last_seen'); })
            .forMember('lastChanged', function (opts) { return opts.mapFrom('last_changed'); })
            .forMember('pciCompliant', function (opts) {
            return opts.mapFrom('pci_compliant');
        });
        return automapper.map('BTCustomerProductSummary', 'CustomerProductSummary', model);
    };
    CustomerProductMap.toBTProducts = function (model) {
        automapper
            .createMap('CustomerProductSummary', 'BTCustomerProductSummary')
            .forMember('parent_id', function (opts) { return opts.mapFrom('parentId'); })
            .forMember('last_checked', function (opts) { return opts.mapFrom('lastChecked'); })
            .forMember('last_seen', function (opts) { return opts.mapFrom('lastSeen'); })
            .forMember('last_changed', function (opts) { return opts.mapFrom('lastChanged'); })
            .forMember('pci_compliant', function (opts) {
            return opts.mapFrom('pciCompliant');
        });
        return automapper.map('CustomerProductSummary', 'BTCustomerProductSummary', model);
    };
    return CustomerProductMap;
}());
exports.CustomerProductMap = CustomerProductMap;
//# sourceMappingURL=customer-product-map.js.map