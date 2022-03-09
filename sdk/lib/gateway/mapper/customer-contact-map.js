"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomerContactMap = void 0;
var CustomerContactMap = (function () {
    function CustomerContactMap() {
    }
    CustomerContactMap.fromBTCustomerContact = function (model) {
        automapper
            .createMap('BTCustomerContact', 'CustomerContact')
            .forMember('customerId', function (opts) { return opts.mapFrom('customer_id'); })
            .forMember('customerLocationId', function (opts) {
            return opts.mapFrom('customer_location_id');
        })
            .forMember('firstName', function (opts) { return opts.mapFrom('first_name'); })
            .forMember('lastName', function (opts) { return opts.mapFrom('last_name'); })
            .forMember('fullName', function (opts) { return opts.mapFrom('full_name'); })
            .forMember('smsNumber', function (opts) { return opts.mapFrom('sms_number'); })
            .forMember('externalId', function (opts) { return opts.mapFrom('external_id'); });
        return automapper.map('BTCustomerContact', 'CustomerContact', model);
    };
    CustomerContactMap.toBTCustomerContact = function (model) {
        automapper
            .createMap('CustomerContact', 'BTCustomerContact')
            .forMember('customer_id', function (opts) { return opts.mapFrom('customerId'); })
            .forMember('customer_location_id', function (opts) {
            return opts.mapFrom('customerLocationId');
        })
            .forMember('first_name', function (opts) { return opts.mapFrom('firstName'); })
            .forMember('last_name', function (opts) { return opts.mapFrom('lastName'); })
            .forMember('full_name', function (opts) { return opts.mapFrom('fullName'); })
            .forMember('sms_number', function (opts) { return opts.mapFrom('smsNumber'); })
            .forMember('external_id', function (opts) { return opts.mapFrom('externalId'); });
        return automapper.map('CustomerContact', 'BTCustomerContact', model);
    };
    CustomerContactMap.fromBTExistsResponse = function (model) {
        automapper
            .createMap('BTExistsResponse', 'ExistsResponse')
            .forMember('currentServerTime', function (opts) {
            return opts.mapFrom('current_server_time');
        });
        return automapper.map('BTExistsResponse', 'ExistsResponse ', model);
    };
    CustomerContactMap.fromBTCustomerContactResponse = function (model) {
        var list = model.results;
        var customerContacts = list.map(function transform(customerContact) {
            return CustomerContactMap.fromBTCustomerContact(customerContact);
        });
        automapper
            .createMap('BTCustomerContactResponse', 'CustomerContactResponse')
            .forMember('currentServerTime', function (opts) {
            return opts.mapFrom('current_server_time');
        })
            .forMember('results', customerContacts);
        return automapper.map('BTCustomerContactResponse', 'CustomerContactResponse', model);
    };
    CustomerContactMap.toBTCustomerContactRequest = function (customerContactRequest) {
        automapper
            .createMap('CustomerContactRequest', 'BTCustomerContactRequest')
            .forMember('customer_user', CustomerContactMap.toBTCustomerContact(customerContactRequest.customerUser));
        return automapper.map('CustomerContactRequest', 'BTCustomerContactRequest', customerContactRequest);
    };
    CustomerContactMap.fromBTCustomerContactSSOResponse = function (responseModel) {
        automapper
            .createMap('BTSSOResponseModel', 'SSOResponse')
            .forMember('currentServerTime', function (opts) {
            return opts.mapFrom('current_server_time');
        });
        return automapper.map('BTSSOResponseModel', 'SSOResponse', responseModel);
    };
    return CustomerContactMap;
}());
exports.CustomerContactMap = CustomerContactMap;
//# sourceMappingURL=customer-contact-map.js.map