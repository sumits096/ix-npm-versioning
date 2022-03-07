"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomerLookupLocationMap = void 0;
var _1 = require(".");
var CustomerLookupLocationMap = (function () {
    function CustomerLookupLocationMap() {
    }
    CustomerLookupLocationMap.fromBTCustomerLookupLocation = function (model) {
        automapper
            .createMap('BTCustomerLookupLocation', 'CustomerLookupLocation')
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
            .forMember('technology', this.fromBTTechnology(model.technology));
        return automapper.map('BTCustomerLookupLocation', 'CustomerLookupLocation', model);
    };
    CustomerLookupLocationMap.fromBTTechnology = function (model) {
        automapper.createMap('BTCustomerTechnologySummary', 'CustomerTechnologySummary');
        return automapper.map('BTCustomerTechnologySummary', 'CustomerTechnologySummary', model);
    };
    CustomerLookupLocationMap.fromBTMetadataValues = function (model) {
        automapper
            .createMap('BTCustomerLookupLocationMetaData', 'CustomerLookupLocationMetaData')
            .forMember('locationTechnologyNotes', function (opts) {
            return opts.mapFrom('location_technology_notes');
        })
            .forMember('uniqueAspectsThatAffectConnectivity', function (opts) {
            return opts.mapFrom('unique_aspects_that_affect_connectivity');
        })
            .forMember('terminalIdentificationNumber', function (opts) {
            return opts.mapFrom('terminal_identification_number');
        });
        return automapper.map('BTCustomerLookupLocationMetaData', 'CustomerLookupLocationMetaData', model);
    };
    return CustomerLookupLocationMap;
}());
exports.CustomerLookupLocationMap = CustomerLookupLocationMap;
//# sourceMappingURL=customer-lookup-location-map.js.map