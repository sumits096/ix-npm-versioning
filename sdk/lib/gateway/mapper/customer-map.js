"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomerMap = void 0;
var ts_automapper_1 = __importDefault(require("ts-automapper"));
ts_automapper_1.default.create("customerModel")
    .map(function (src) { return src.id; }, function (dst) { return dst.id; })
    .map(function (src) { return src.name; }, function (dst) { return dst.name; })
    .map(function (src) { return src.name_legal; }, function (dst) { return dst.nameLegal; })
    .map(function (src) { return src.street_1; }, function (dst) { return dst.street1; })
    .map(function (src) { return src.street_2; }, function (dst) { return dst.street2; })
    .map(function (src) { return src.city; }, function (dst) { return dst.city; })
    .map(function (src) { return src.state; }, function (dst) { return dst.state; })
    .map(function (src) { return src.zipcode; }, function (dst) { return dst.zipcode; })
    .map(function (src) { return src.email; }, function (dst) { return dst.email; })
    .map(function (src) { return src.phone; }, function (dst) { return dst.phone; })
    .map(function (src) { return src.external_id; }, function (dst) { return dst.externalId; })
    .map(function (src) { return src.industry; }, function (dst) { return dst.industry; })
    .map(function (src) { return src.status; }, function (dst) { return dst.status; })
    .map(function (src) { return src.created; }, function (dst) { return dst.created; })
    .map(function (src) { return src.latitude; }, function (dst) { return dst.latitude; })
    .map(function (src) { return src.longitude; }, function (dst) { return dst.longitude; });
ts_automapper_1.default.create("customerResponse")
    .map(function (src) { return src.success; }, function (dst) { return dst.success; })
    .map(function (src) { return src.currentServerTime; }, function (dst) { return dst.current_server_time; })
    .map(function (src) { return src.totalCount; }, function (dst) { return dst.totalCount; })
    .map(function (src) { return src.returned; }, function (dst) { return dst.returned; })
    .map(function (src) { return src.pages; }, function (dst) { return dst.pages; })
    .map(function (src) { return src.message; }, function (dst) { return dst.message; })
    .map(function (src) { return src.results; }, function (dst) { return dst.results; });
var _1 = require(".");
var CustomerMap = (function () {
    function CustomerMap() {
    }
    CustomerMap.fromBTCustomer = function (model) {
        var result = ts_automapper_1.default.exec("customerModel", model);
        return result;
    };
    CustomerMap.toBTRequestModel = function (model) {
        var result = ts_automapper_1.default.exec("customerCreateRequest", model);
        return result;
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
        var result = ts_automapper_1.default.exec("customerResponse", responseModel);
        return result;
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