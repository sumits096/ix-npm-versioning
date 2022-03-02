"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomerLookupMap = void 0;
require("automapper-ts");
var _1 = require(".");
var customer_map_1 = require("./customer-map");
var CustomerLookupMap = (function () {
    function CustomerLookupMap() {
    }
    CustomerLookupMap.customerLookupResponse = function (responseModel) {
        automapper
            .createMap('BTCustomerLookupResponse', 'CustomerLookupResponse')
            .forMember('currentServerTime', function (opts) {
            return opts.mapFrom('current_server_time');
        })
            .forMember('results', this.fromBTCustomerLookupTuple(responseModel.results));
        return automapper.map('BTCustomerLookupResponse', 'CustomerLookupResponse', responseModel);
    };
    CustomerLookupMap.fromBTCustomerLookupTuple = function (tuple) {
        automapper
            .createMap('BTCustomerLookupTuple', 'CustomerLookupTuple')
            .forMember('customersId', function (opts) { return opts.mapFrom('customers_id'); })
            .forMember('customersUsersId', function (opts) { return opts.mapFrom('customers_users_id'); })
            .forMember('customersLocationsId', function (opts) { return opts.mapFrom('customers_locations_id'); })
            .forMember('customer', customer_map_1.CustomerMap.fromBTCustomer(tuple.customer))
            .forMember('customerContact', _1.CustomerContactMap.fromBTCustomerContact(tuple.customer_user))
            .forMember('customer_user', function (opts) { return opts.ignore(); })
            .forMember('customerLocation', _1.CustomerLookupLocationMap.fromBTCustomerLookupLocation(tuple.customer_location))
            .forMember('customer_location', function (opts) { return opts.ignore(); });
        return automapper.map('BTCustomerLookupTuple', 'CustomerLookupTuple', tuple);
    };
    return CustomerLookupMap;
}());
exports.CustomerLookupMap = CustomerLookupMap;
//# sourceMappingURL=customer-lookup-map.js.map