"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MetaCustomFormsMap = void 0;
var MetaCustomFormsMap = (function () {
    function MetaCustomFormsMap() {
    }
    MetaCustomFormsMap.mapper = function (responseModel) {
        var list = responseModel.results;
        var customForms = list.map(function transform(customForm) {
            return MetaCustomFormsMap.fromBTCustomForm(customForm);
        });
        automapper
            .createMap('BTMetaCustomFormsResponse', 'MetaCustomFormsResponse')
            .forMember('currentServerTime', function (opts) {
            return opts.mapFrom('current_server_time');
        })
            .forMember('results', customForms);
        return automapper.map('BTMetaCustomFormsResponse', 'MetaCustomFormsResponse', responseModel);
    };
    MetaCustomFormsMap.fromBTCustomForm = function (model) {
        var list = model.fields;
        var customFormFields = list.map(function transform(customFormField) {
            return MetaCustomFormsMap.fromBTCustomFormField(customFormField);
        });
        automapper
            .createMap('BTCustomForm', 'CustomForm')
            .forMember('orgTeamIds', function (opts) { return opts.mapFrom('org_team_ids'); })
            .forMember('results', customFormFields);
        return automapper.map('BTCustomForm', 'CustomForm', model);
    };
    MetaCustomFormsMap.fromBTCustomFormField = function (model) {
        automapper
            .createMap('BTCustomFormField', 'CustomFormField')
            .forMember('defaultValue', function (opts) { return opts.mapFrom('default_value'); })
            .forMember('listItems', function (opts) { return opts.mapFrom('list_items'); });
        return automapper.map('BTCustomFormField', 'CustomFormField', model);
    };
    return MetaCustomFormsMap;
}());
exports.MetaCustomFormsMap = MetaCustomFormsMap;
//# sourceMappingURL=meta-custom-forms-map.js.map