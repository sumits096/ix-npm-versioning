"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CaseLogMapper = void 0;
var CaseLogMapper = (function () {
    function CaseLogMapper() {
    }
    CaseLogMapper.caseLogResponse = function (responseModel) {
        var list = responseModel.results;
        var casesLog = list.map(function transform(caseLog) {
            return CaseLogMapper.fromBTCaseLog(caseLog);
        });
        automapper
            .createMap('BTCaseLogResponse', 'CaseLogResponse')
            .forMember('currentServerTime', function (opts) {
            return opts.mapFrom('current_server_time');
        })
            .forMember('results', casesLog);
        return automapper.map('BTCaseLogResponse', 'CaseLogResponse', responseModel);
    };
    CaseLogMapper.fromBTCaseLog = function (model) {
        automapper
            .createMap('BTCaseLog', 'CaseLog')
            .forMember('id', function (opts) { return opts.mapFrom('id'); })
            .forMember('issuesId', function (opts) { return opts.mapFrom('issues_id'); })
            .forMember('usersFullName', function (opts) { return opts.mapFrom('users_full_name'); })
            .forMember('usersNickname', function (opts) { return opts.mapFrom('users_nickname'); })
            .forMember('usersCertifications', function (opts) { return opts.mapFrom('users_certifications'); })
            .forMember('diffLog', function (opts) { return opts.mapFrom('diff_log'); })
            .forMember('interactionEvent', this.fromBTCaseLogInteractionEvent(JSON.parse(model.interaction_event)))
            .forMember('notes', function (opts) { return opts.mapFrom('notes'); })
            .forMember('created', function (opts) { return opts.mapFrom('created'); })
            .forMember('eventCategory', function (opts) { return opts.mapFrom('event_category'); })
            .forMember('eventCategoryLabel', function (opts) { return opts.mapFrom('event_category_label'); })
            .forMember('eventType', function (opts) { return opts.mapFrom('event_type'); })
            .forMember('e`ventTypeLabel', function (opts) { return opts.mapFrom('event_type_label'); })
            .forMember('fromIssueSave', function (opts) { return opts.mapFrom('fromIssueSave'); })
            .forMember('highlighted', function (opts) { return opts.mapFrom('_highlighted'); })
            .forMember('highlightmap', this.fromBTHighlightmap(model._highlightmap))
            .ignoreAllNonExisting();
        return automapper.map('BTCaseLog', 'CaseLog', model);
    };
    CaseLogMapper.fromBTInteractionEventBody = function (model) {
        var data = model ? model : {};
        automapper.createMap('BTInteractionEventBody', 'InteractionEventBody')
            .forMember('data', function (opts) { return opts.mapFrom('data'); })
            .forMember('type', function (opts) { return opts.mapFrom('type'); });
        return automapper.map('BTInteractionEventBody', 'InteractionEventBody', data);
    };
    CaseLogMapper.fromBTInteractionEventRefs = function (model) {
        var data = model ? model : {};
        automapper.createMap('BTInteractionEventRefs', 'InteractionEventRefs')
            .forMember('objetcts', function (opts) { return opts.mapFrom('objects'); })
            .forMember('source', function (opts) { return opts.mapFrom('source'); });
        return automapper.map('BTInteractionEventRefs', 'InteractionEventRefs', data);
    };
    CaseLogMapper.fromBTInteractionEventType = function (model) {
        var data = model ? model : {};
        automapper.createMap('BTInteractionEventType', 'InteractionEventType')
            .forMember('id', function (opts) { return opts.mapFrom('id'); })
            .forMember('label', function (opts) { return opts.mapFrom('label'); });
        return automapper.map('BTInteractionEventType', 'InteractionEventType', data);
    };
    CaseLogMapper.fromBTInteractionEventCategory = function (model) {
        var data = model ? model : {};
        automapper.createMap('BTInteractionEventCategory', 'InteractionEventCategory')
            .forMember('id', function (opts) { return opts.mapFrom('id'); })
            .forMember('label', function (opts) { return opts.mapFrom('label'); });
        return automapper.map('BTInteractionEventCategory', 'InteractionEventCategory', data);
    };
    CaseLogMapper.fromBTCaseLogInteractionEvent = function (model) {
        var data = model ? model : {};
        automapper.createMap('BTCaseLogInteractionEvent', 'CaseLogInteractionEvent')
            .forMember('body', this.fromBTInteractionEventBody(data.body))
            .forMember('refs', this.fromBTInteractionEventRefs(data.refs))
            .forMember('type', this.fromBTInteractionEventType(data.type))
            .forMember('logId', function (opts) { return opts.mapFrom('log_id'); })
            .forMember('created', function (opts) { return opts.mapFrom('created'); })
            .forMember('category', this.fromBTInteractionEventCategory(data.category))
            .ignoreAllNonExisting();
        return automapper.map('BTCaseLogInteractionEvent', 'CaseLogInteractionEvent', data);
    };
    CaseLogMapper.fromBTHighlightmap = function (model) {
        automapper.createMap('BTHighlightmap', 'Highlightmap');
        return automapper.map('BTHighlightmap', 'Highlightmap', model);
    };
    return CaseLogMapper;
}());
exports.CaseLogMapper = CaseLogMapper;
//# sourceMappingURL=case-log-map.js.map