"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomerFormsMap = void 0;
require("automapper-ts");
var CustomerFormsMap = (function () {
    function CustomerFormsMap() {
    }
    CustomerFormsMap.fromBTCustomFormsList = function (model) {
        automapper
            .createMap('BTCustomFormDataList', 'CustomFormDataList')
            .forMember('id', this.fromBTCustomForms(model === null || model === void 0 ? void 0 : model.id));
        return automapper.map('BTCustomFormDataList', 'CustomFormDataList', model);
    };
    CustomerFormsMap.fromBTCustomForms = function (model) {
        automapper.createMap('BTCustomFormData', 'CustomFormData');
        return automapper.map('BTCustomFormData', 'CustomFormData', model);
    };
    CustomerFormsMap.toBCustomFormsDataList = function (model) {
        automapper
            .createMap('CustomFormDataList', 'BTCustomFormDataList')
            .forMember('id', this.toBTCustomForms(model === null || model === void 0 ? void 0 : model.id));
        return automapper.map('CustomFormDataList', 'BTCustomFormDataList', model);
    };
    CustomerFormsMap.toBTCustomForms = function (model) {
        automapper.createMap('CustomFormData', 'BTCustomFormData');
        return automapper.map('CustomFormData', 'BTCustomFormData', model);
    };
    return CustomerFormsMap;
}());
exports.CustomerFormsMap = CustomerFormsMap;
//# sourceMappingURL=custom-forms-map.js.map