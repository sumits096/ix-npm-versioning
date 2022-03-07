"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomerMap = void 0;
var _1 = require(".");
var CustomerMap = (function () {
    function CustomerMap() {
    }
    CustomerMap.fromBTCustomer = function (model) {
        automapper
            .createMap('BTCustomer', 'Customer')
            .forMember('nameLegal', function (opts) { return opts.mapFrom('name_legal'); })
            .forMember('street1', function (opts) { return opts.mapFrom('street_1'); })
            .forMember('street2', function (opts) { return opts.mapFrom('street_2'); })
            .forMember('externalId', function (opts) { return opts.mapFrom('external_id'); });
        return automapper.map('BTCustomer', 'Customer', model);
    };
    CustomerMap.toBTRequestModel = function (model) {
        automapper
            .createMap('CustomerCreateRequest', 'BTCustomerCreateRequest')
            .forMember('customer', this.toBTCustomer(model.customer))
            .forMember('customer_user', _1.CustomerContactMap.toBTCustomerContact(model.customerContact))
            .forMember('customer_location', _1.CustomerLocationMap.toBTCustomerLocation(model.customerLocation));
        return automapper.map('CustomerCreateRequest', 'BTCustomerCreateRequest', model);
    };
    CustomerMap.toBTCustomer = function (model) {
        automapper
            .createMap('Customer', 'BTCustomer')
            .forMember('name_legal', function (opts) { return opts.mapFrom('nameLegal'); })
            .forMember('street_1', function (opts) { return opts.mapFrom('street1'); })
            .forMember('street_2', function (opts) { return opts.mapFrom('street2'); })
            .forMember('external_id', function (opts) { return opts.mapFrom('externalId'); });
        return automapper.map('Customer', 'BTCustomer', model);
    };
    CustomerMap.mapper = function (responseModel) {
        var list = responseModel.results;
        var customers = list.map(function transform(customer) {
            return CustomerMap.fromBTCustomer(customer);
        });
        automapper
            .createMap('BTCustomerResponse', 'CustomerResponse')
            .forMember('currentServerTime', function (opts) {
            return opts.mapFrom('current_server_time');
        })
            .forMember('results', customers);
        return automapper.map('BTCustomerResponse', 'CustomerResponse', responseModel);
    };
    CustomerMap.customerCreateResponse = function (responseModel) {
        var tuple = responseModel.results;
        var model = {};
        model.customer = this.fromBTCustomer(tuple.customer);
        model.customerContact = _1.CustomerContactMap.fromBTCustomerContact(tuple.customer_user);
        model.customerLocation = _1.CustomerLocationMap.fromBTCustomerLocation(tuple.customer_location);
        automapper
            .createMap('BTCustomerCreateResponse', 'CustomerCreateResponse')
            .forMember('currentServerTime', function (opts) {
            return opts.mapFrom('current_server_time');
        })
            .forMember('results', model);
        return automapper.map('BTCustomerCreateResponse', 'CustomerCreateResponse', responseModel);
    };
    CustomerMap.toBTSmsInviteDataModel = function (model) {
        automapper.createMap('BTSmsInviteData', 'SmsInviteData')
            .forMember('sms_number', function (opts) { return opts.mapFrom('smsNumber'); })
            .forMember('org_team_id', function (opts) { return opts.mapFrom('orgTeamId'); });
        return automapper.map('BTSmsInviteData', 'SmsInviteData', model);
    };
    CustomerMap.fromBTSmsInviteResponse = function (model) {
        automapper
            .createMap('BTSmsInviteResponse', 'SmsInviteResponse')
            .forMember('currentServerTime', function (opts) { return opts.mapFrom('current_server_time'); });
        return automapper.map('BTSmsInviteResponse', 'SmsInviteResponse', model);
    };
    return CustomerMap;
}());
exports.CustomerMap = CustomerMap;
//# sourceMappingURL=customer-map.js.map