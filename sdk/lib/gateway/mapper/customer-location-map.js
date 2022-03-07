"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomerLocationMap = void 0;
var _1 = require(".");
var CustomerLocationMap = (function () {
    function CustomerLocationMap() {
    }
    CustomerLocationMap.responseCustomerLocationMapper = function (responseModel) {
        var list = responseModel.results;
        var location = list.map(function transform(customer) {
            return CustomerLocationMap.fromBTCustomerLocation(customer);
        });
        automapper
            .createMap('BTCustomerLocationResponse', 'CustomerLocationResponse')
            .forMember('currentServerTime', function (opts) {
            return opts.mapFrom('current_server_time');
        })
            .forMember('results', location);
        return automapper.map('BTCustomerLocationResponse', 'CustomerLocationResponse', responseModel);
    };
    CustomerLocationMap.fromBTCustomerLocation = function (model) {
        automapper
            .createMap('BTCustomerLocation', 'CustomerLocation')
            .forMember('customerId', function (opts) { return opts.mapFrom('customer_id'); })
            .forMember('street1', function (opts) { return opts.mapFrom('street_1'); })
            .forMember('street2', function (opts) { return opts.mapFrom('street_2'); })
            .forMember('siteName', function (opts) { return opts.mapFrom('site_name'); })
            .forMember('orgTeamIds', function (opts) { return opts.mapFrom('org_team_ids'); })
            .forMember('externalId', function (opts) { return opts.mapFrom('external_id'); })
            .forMember('merchantIds', function (opts) { return opts.mapFrom('merchant_ids'); })
            .forMember('customForms', _1.CustomerFormsMap.fromBTCustomFormsList(model.custom_forms))
            .forMember('custom_forms', function (opts) { return opts.ignore(); })
            .forMember('files', _1.UploadFilesMap.fromBTUploadFilesList(model.files))
            .forMember('metadataValues', this.fromBTMetadataValues(model.metadata_values))
            .forMember('metadata_values', function (opts) { return opts.ignore(); })
            .forMember('products', _1.CustomerProductMap.fromBTProducts(model.products));
        return automapper.map('BTCustomerLocation', 'CustomerLocation', model);
    };
    CustomerLocationMap.fromBTMetadataValues = function (model) {
        automapper
            .createMap('BTCustomerLocationMetaData', 'CustomerLocationMetaData')
            .forMember('locationProductsNotes', function (opts) {
            return opts.mapFrom('location_products_notes');
        })
            .forMember('uniqueAspectsThatAffectConnectivity', function (opts) {
            return opts.mapFrom('unique_aspects_that_affect_connectivity');
        })
            .forMember('terminalIdentificationNumber', function (opts) {
            return opts.mapFrom('terminal_identification_number');
        });
        return automapper.map('BTCustomerLocationMetaData', 'CustomerLocationMetaData', model);
    };
    CustomerLocationMap.toBTCreateRequestModel = function (model) {
        automapper
            .createMap('CustomerLocationCreate', 'BTCustomerLocationCreate')
            .forMember('customer_location', CustomerLocationMap.toBTCustomerLocation(model.customerLocation));
        return automapper.map('CustomerLocationCreate', 'BTCustomerLocationCreate', model);
    };
    CustomerLocationMap.toBTCustomerLocation = function (model) {
        automapper
            .createMap('CustomerLocation', 'BTCustomerLocation')
            .forMember('customer_id', function (opts) { return opts.mapFrom('customerId'); })
            .forMember('street_1', function (opts) { return opts.mapFrom('street1'); })
            .forMember('street_2', function (opts) { return opts.mapFrom('street2'); })
            .forMember('site_name', function (opts) { return opts.mapFrom('siteName'); })
            .forMember('org_team_ids', function (opts) { return opts.mapFrom('orgTeamIds'); })
            .forMember('external_id', function (opts) { return opts.mapFrom('externalId'); })
            .forMember('merchant_ids', function (opts) { return opts.mapFrom('merchantIds'); })
            .forMember('custom_forms', _1.CustomerFormsMap.toBCustomFormsDataList(model.customForms))
            .forMember('files', _1.UploadFilesMap.toBTUploadFileModel(model.files))
            .forMember('metadata_values', CustomerLocationMap.toBTCustomerLocationMetaData(model.metadataValues))
            .forMember('products', _1.CustomerProductMap.toBTProducts(model.products));
        return automapper.map('CustomerLocation', 'BTCustomerLocation', model);
    };
    CustomerLocationMap.toBTCustomerLocationMetaData = function (model) {
        automapper
            .createMap('CustomerLocationMetaData', 'BTCustomerLocationMetaData')
            .forMember('location_products_notes', function (opts) {
            return opts.mapFrom('locationProductsNotes');
        })
            .forMember('unique_aspects_that_affect_connectivity', function (opts) {
            return opts.mapFrom('uniqueAspectsThatAffectConnectivity');
        })
            .forMember('terminal_identification_number', function (opts) {
            return opts.mapFrom('terminalIdentificationNumber');
        });
        return automapper.map('CustomerLocationMetaData', 'BTCustomerLocationMetaData', model);
    };
    CustomerLocationMap.customerLocationCreateResponse = function (responseModel) {
        var tuple = responseModel.results;
        var model = {};
        model.customer = _1.CustomerMap.fromBTCustomer(tuple.customer);
        model.customerContact = _1.CustomerContactMap.fromBTCustomerContact(tuple.customer_user);
        model.customerLocation = CustomerLocationMap.fromBTCustomerLocation(tuple.customer_location);
        automapper
            .createMap('BTCustomerLocationCreateResponse', 'CustomerLocationCreateResponse')
            .forMember('currentServerTime', function (opts) {
            return opts.mapFrom('current_server_time');
        })
            .forMember('results', model);
        return automapper.map('BTCustomerLocationCreateResponse', 'CustomerLocationCreateResponse', responseModel);
    };
    return CustomerLocationMap;
}());
exports.CustomerLocationMap = CustomerLocationMap;
//# sourceMappingURL=customer-location-map.js.map