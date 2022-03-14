"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CasesMap = void 0;
require("automapper-ts");
var CasesMap = (function () {
    function CasesMap() {
    }
    CasesMap.fromBTCases = function (model) {
        automapper
            .createMap('BTCases', 'Cases')
            .forMember('id', function (opts) { return opts.mapFrom('id'); })
            .forMember('referenceNum', function (opts) {
            return opts.mapFrom('reference_num');
        })
            .forMember('remoteId', function (opts) { return opts.mapFrom('remote_id'); })
            .forMember('displayName', function (opts) { return opts.mapFrom('display_name'); })
            .forMember('customerId', function (opts) { return opts.mapFrom('customer_id'); })
            .forMember('customerName', function (opts) {
            return opts.mapFrom('customer_name');
        })
            .forMember('customerEmail', function (opts) {
            return opts.mapFrom('customer_email');
        })
            .forMember('customerLocationId', function (opts) {
            return opts.mapFrom('customer_location_id');
        })
            .forMember('customerLocationName', function (opts) {
            return opts.mapFrom('customer_location_name');
        })
            .forMember('customerContactId', function (opts) {
            return opts.mapFrom('customer_user_id');
        })
            .forMember('customerContactName', function (opts) {
            return opts.mapFrom('customer_user_name');
        })
            .forMember('customerContactEmail', function (opts) {
            return opts.mapFrom('customer_user_email');
        })
            .forMember('userId', function (opts) { return opts.mapFrom('user_id'); })
            .forMember('externalId', function (opts) { return opts.mapFrom('external_id'); })
            .forMember('type', function (opts) { return opts.mapFrom('type'); })
            .forMember('category', function (opts) { return opts.mapFrom('category'); })
            .forMember('details', function (opts) { return opts.mapFrom('details'); })
            .forMember('status', function (opts) { return opts.mapFrom('status'); })
            .forMember('job', function (opts) { return opts.mapFrom('job'); })
            .forMember('resolution', function (opts) { return opts.mapFrom('resolution'); })
            .forMember('created', function (opts) { return opts.mapFrom('created'); })
            .forMember('updated', function (opts) { return opts.mapFrom('updated'); })
            .forMember('scheduledTime', function (opts) {
            return opts.mapFrom('scheduled_time');
        })
            .forMember('enrouteTime', function (opts) { return opts.mapFrom('enroute_time'); })
            .forMember('arrivalTime', function (opts) { return opts.mapFrom('arrival_time'); })
            .forMember('departureTime', function (opts) {
            return opts.mapFrom('departure_time');
        })
            .forMember('idrIsq', function (opts) { return opts.mapFrom('idr_isq'); })
            .forMember('idrProcess', function (opts) { return opts.mapFrom('idr_process'); })
            .forMember('idrResolution', function (opts) {
            return opts.mapFrom('idr_resolution');
        })
            .forMember('techSupportMinutes', function (opts) {
            return opts.mapFrom('tech_support_minutes');
        })
            .forMember('specialNotes', function (opts) {
            return opts.mapFrom('special_notes');
        })
            .forMember('unmanaged', function (opts) { return opts.mapFrom('unmanaged'); })
            .forMember('ownerOrgTeamId', function (opts) {
            return opts.mapFrom('owner_org_team_id');
        })
            .forMember('sponsorOrgTeamId', function (opts) {
            return opts.mapFrom('sponsor_org_team_id');
        })
            .forMember('tags', function (opts) { return opts.mapFrom('tags'); })
            .forMember('categoryNew', function (opts) { return opts.mapFrom('category_new'); })
            .forMember('membersDevices', CasesMap.fromBTCasesInlineList(model.members_devices))
            .forMember('kbArticles', CasesMap.fromBTCasesInline0List(model.kb_articles))
            .forMember('metadataValues', CasesMap.fromBTCasesMetadata(model.metadata_values))
            .ignoreAllNonExisting();
        return automapper.map('BTCases', 'Cases', model);
    };
    CasesMap.toBTRequestModel = function (model) {
        automapper
            .createMap('CasesCreateRequest', 'BTCasesCreateRequest')
            .forMember('issues', this.toBTCases(model.cases));
        return automapper.map('CasesCreateRequest', 'BTCasesCreateRequest', model);
    };
    CasesMap.toBTCases = function (model) {
        automapper
            .createMap('Cases', 'BTCases')
            .forMember('id', function (opts) { return opts.mapFrom('id'); })
            .forMember('reference_num', function (opts) {
            return opts.mapFrom('referenceNum');
        })
            .forMember('remote_id', function (opts) { return opts.mapFrom('remoteId'); })
            .forMember('display_name', function (opts) { return opts.mapFrom('displayName'); })
            .forMember('customer_id', function (opts) { return opts.mapFrom('customerId'); })
            .forMember('customer_name', function (opts) {
            return opts.mapFrom('customerName');
        })
            .forMember('customer_email', function (opts) {
            return opts.mapFrom('customerEmail');
        })
            .forMember('customer_location_id', function (opts) {
            return opts.mapFrom('customerLocationId');
        })
            .forMember('customer_location_name', function (opts) {
            return opts.mapFrom('customerLocationName');
        })
            .forMember('customer_user_id', function (opts) {
            return opts.mapFrom('customerContactId');
        })
            .forMember('customer_user_name', function (opts) {
            return opts.mapFrom('customerContactName');
        })
            .forMember('customer_user_email', function (opts) {
            return opts.mapFrom('customerContactEmail');
        })
            .forMember('user_id', function (opts) { return opts.mapFrom('userId'); })
            .forMember('external_id', function (opts) { return opts.mapFrom('externalId'); })
            .forMember('type', function (opts) { return opts.mapFrom('type'); })
            .forMember('category', function (opts) { return opts.mapFrom('category'); })
            .forMember('details', function (opts) { return opts.mapFrom('details'); })
            .forMember('status', function (opts) { return opts.mapFrom('status'); })
            .forMember('job', function (opts) { return opts.mapFrom('job'); })
            .forMember('resolution', function (opts) { return opts.mapFrom('resolution'); })
            .forMember('created', function (opts) { return opts.mapFrom('created'); })
            .forMember('updated', function (opts) { return opts.mapFrom('updated'); })
            .forMember('scheduled_time', function (opts) {
            return opts.mapFrom('scheduledTime');
        })
            .forMember('enroute_time', function (opts) { return opts.mapFrom('enrouteTime'); })
            .forMember('arrival_time', function (opts) { return opts.mapFrom('arrivalTime'); })
            .forMember('departure_time', function (opts) {
            return opts.mapFrom('departureTime');
        })
            .forMember('idr_isq', function (opts) { return opts.mapFrom('idrIsq'); })
            .forMember('idr_process', function (opts) { return opts.mapFrom('idrProcess'); })
            .forMember('idr_resolution', function (opts) {
            return opts.mapFrom('idrResolution');
        })
            .forMember('tech_support_minutes', function (opts) {
            return opts.mapFrom('techSupportMinutes');
        })
            .forMember('special_notes', function (opts) {
            return opts.mapFrom('specialNotes');
        })
            .forMember('unmanaged', function (opts) { return opts.mapFrom('unmanaged'); })
            .forMember('owner_org_team_id', function (opts) {
            return opts.mapFrom('ownerOrgTeamId');
        })
            .forMember('sponsor_org_team_id', function (opts) {
            return opts.mapFrom('sponsorOrgTeamId');
        })
            .forMember('tags', function (opts) { return opts.mapFrom('tags'); })
            .forMember('category_new', function (opts) { return opts.mapFrom('categoryNew'); })
            .forMember('members_devices', CasesMap.toBTCasesInlineList(model.membersDevices))
            .forMember('kb_articles', CasesMap.toBTCasesInline0List(model.kbArticles))
            .forMember('metadata_values', CasesMap.toBTCasesMetadata(model.metadataValues))
            .ignoreAllNonExisting();
        return automapper.map('Cases', 'BTCases', model);
    };
    CasesMap.casesResponse = function (responseModel) {
        var list = responseModel.results;
        var casesList = list.map(function transform(cases) {
            return CasesMap.fromBTCases(cases);
        });
        automapper
            .createMap('BTCasesResponse', 'CasesResponse')
            .forMember('currentServerTime', function (opts) {
            return opts.mapFrom('current_server_time');
        })
            .forMember('results', casesList);
        return automapper.map('BTCasesResponse', 'CasesResponse', responseModel);
    };
    CasesMap.casesCreateResponse = function (responseModel) {
        var tuple = responseModel.results;
        var model = CasesMap.fromBTCases(tuple);
        automapper
            .createMap('BTCasesCreateResponse', 'CasesCreateResponse')
            .forMember('currentServerTime', function (opts) {
            return opts.mapFrom('current_server_time');
        })
            .forMember('results', model);
        return automapper.map('BTCasesCreateResponse', 'CasesCreateResponse', responseModel);
    };
    CasesMap.fromBTCasesInline = function (model) {
        automapper
            .createMap('BTCasesInline', 'CasesInline')
            .forMember('productId', function (opts) { return opts.mapFrom('product_id'); });
        return automapper.map('BTCasesInline', 'CasesInline', model);
    };
    CasesMap.toBTCasesInline = function (model) {
        automapper
            .createMap('CasesInline', 'BTCasesInline')
            .forMember('product_id', function (opts) { return opts.mapFrom('productId'); });
        return automapper.map('CasesInline', 'BTCasesInline', model);
    };
    CasesMap.fromBTCasesInlineList = function (casesList) {
        var model = casesList ? casesList : [];
        return model.map(function transform(cases) {
            return CasesMap.fromBTCasesInline(cases);
        });
    };
    CasesMap.toBTCasesInlineList = function (casesList) {
        var model = casesList ? casesList : [];
        return model.map(function transform(cases) {
            return CasesMap.toBTCasesInline(cases);
        });
    };
    CasesMap.fromBTCasesInline0 = function (model) {
        automapper.createMap('BTCasesInline0', 'CasesInline0');
        return automapper.map('BTCasesInline0', 'CasesInline0', model);
    };
    CasesMap.toBTCasesInline0 = function (model) {
        automapper.createMap('CasesInline0', 'BTCasesInline0');
        return automapper.map('CasesInline0', 'BTCasesInline0', model);
    };
    CasesMap.fromBTCasesInline0List = function (casesList) {
        var model = casesList ? casesList : [];
        return model.map(function transform(cases) {
            return CasesMap.fromBTCasesInline0(cases);
        });
    };
    CasesMap.toBTCasesInline0List = function (casesList) {
        var model = casesList ? casesList : [];
        return model.map(function transform(cases) {
            return CasesMap.toBTCasesInline0(cases);
        });
    };
    CasesMap.fromBTCasesMetadata = function (model) {
        automapper
            .createMap('BTCasesMetadata', 'CasesMetadata')
            .forMember('preferredInstallDate', function (opts) {
            return opts.mapFrom('preferred_install_date');
        })
            .forMember('preferredTimeFrame', function (opts) {
            return opts.mapFrom('preferred_time_frame');
        })
            .forMember('alternateInstallDate', function (opts) {
            return opts.mapFrom('alternate_install_date');
        })
            .forMember('alternateTimeFrame', function (opts) {
            return opts.mapFrom('alternate_time_frame');
        })
            .forMember('numberOfPosDevices', function (opts) {
            return opts.mapFrom('number_of_pos_devices ');
        });
        return automapper.map('BTCasesMetadata', 'CasesMetadata', model);
    };
    CasesMap.toBTCasesMetadata = function (model) {
        automapper
            .createMap('CasesMetadata', 'BTCasesMetadata')
            .forMember('preferred_install_date', function (opts) {
            return opts.mapFrom('preferredInstallDate');
        })
            .forMember('preferred_time_frame', function (opts) {
            return opts.mapFrom('preferredTimeFrame');
        })
            .forMember('alternate_install_date', function (opts) {
            return opts.mapFrom('alternateInstallDate');
        })
            .forMember('alternate_time_frame', function (opts) {
            return opts.mapFrom('alternateTimeFrame');
        })
            .forMember('number_of_pos_devices', function (opts) {
            return opts.mapFrom('numberOfPosDevices ');
        });
        return automapper.map('CasesMetadata', 'BTCasesMetadata', model);
    };
    CasesMap.toBTCasesOptionsModel = function (model) {
        automapper
            .createMap('CasesListOptions', 'BTCasesListOptions')
            .forMember('customer_id', function (opts) { return opts.mapFrom('customerId'); })
            .forMember('customers_users_id', function (opts) {
            return opts.mapFrom('customersUsersId');
        })
            .forMember('customer_location_id', function (opts) {
            return opts.mapFrom('customerLocationId');
        });
        return automapper.map('CasesListOptions', 'BTCasesListOptions', model);
    };
    CasesMap.fromBTCaseStatus = function (model) {
        automapper
            .createMap('BTCaseStatus', 'CaseStatus')
            .forMember('scheduledTime', function (opts) {
            return opts.mapFrom('scheduled_time');
        });
        return automapper.map('BTCaseStatus', 'CaseStatus', model);
    };
    CasesMap.toBTCaseStatus = function (model) {
        automapper
            .createMap('CaseStatus', 'BTCaseStatus')
            .forMember('scheduled_time', function (opts) {
            return opts.mapFrom('scheduledTime');
        });
        return automapper.map('CaseStatus', 'BTCaseStatus', model);
    };
    CasesMap.toBTCaseEscalateOptions = function (model) {
        automapper
            .createMap('CaseEscalate', 'BTCaseEscalate')
            .forMember('org_team_id', function (opts) { return opts.mapFrom('orgTeamId'); })
            .forMember('user_id', function (opts) { return opts.mapFrom('userId'); })
            .forMember('alert_collaborators', function (opts) {
            return opts.mapFrom('alertCollaborators');
        });
        return automapper.map('CaseEscalate', 'BTCaseEscalate', model);
    };
    CasesMap.toBTCaseDeEscalateOptions = function (model) {
        automapper
            .createMap('CaseDeEscalate', 'BTCaseDeEscalate')
            .forMember('org_team_id', function (opts) { return opts.mapFrom('orgTeamId'); })
            .forMember('user_id', function (opts) { return opts.mapFrom('userId'); });
        return automapper.map('CaseDeEscalate', 'BTCaseDeEscalate', model);
    };
    CasesMap.caseStatusHistoryResponse = function (responseModel) {
        var list = responseModel.results;
        var model = list.map(function transform(statusHistory) {
            return CasesMap.fromBTCaseStatusHistory(statusHistory);
        });
        automapper
            .createMap('BTCaseStatusHistory', 'CaseStatusHistory')
            .forMember('currentServerTime', function (opts) {
            return opts.mapFrom('current_server_time');
        })
            .forMember('results', model);
        return automapper.map('BTCaseStatusHistory', 'CaseStatusHistory', responseModel);
    };
    CasesMap.fromBTCaseStatusHistory = function (model) {
        automapper
            .createMap('BTCaseStatusHistory', 'CaseStatusHistory')
            .forMember('scheduledTime', function (opts) {
            return opts.mapFrom('scheduled_time');
        });
        return automapper.map('BTCaseStatusHistory', 'CaseStatusHistory', model);
    };
    CasesMap.caseChatHistoryResponse = function (responseModel) {
        var list = responseModel.results;
        var model = list.map(function transform(chatHistory) {
            return CasesMap.fromBTCaseChatHistory(chatHistory);
        });
        automapper
            .createMap('BTCaseChatHistory', 'CaseChatHistory')
            .forMember('currentServerTime', function (opts) {
            return opts.mapFrom('current_server_time');
        })
            .forMember('results', model);
        return automapper.map('BTCaseChatHistory', 'CaseChatHistory', responseModel);
    };
    CasesMap.fromBTCaseChatHistory = function (model) {
        automapper
            .createMap('BTCaseChatHistory', 'CaseChatHistory')
            .forMember('objectId', function (opts) { return opts.mapFrom('object_id'); })
            .forMember('objectScope', function (opts) { return opts.mapFrom('object_scope'); })
            .forMember('chatType', function (opts) { return opts.mapFrom('chat_type'); })
            .forMember('chatStatus', function (opts) { return opts.mapFrom('chat_status'); })
            .forMember('billingStatus', function (opts) {
            return opts.mapFrom('billing_status');
        })
            .forMember('durationPlus', function (opts) {
            return opts.mapFrom('duration_plus');
        })
            .forMember('transcript', CasesMap.fromBTCaseChatHistoryTranscript(model.transcript))
            .forMember('externalRpid', function (opts) {
            return opts.mapFrom('external_rpid');
        })
            .forMember('externalLpid', function (opts) {
            return opts.mapFrom('external_lpid');
        })
            .forMember('externalId', function (opts) { return opts.mapFrom('external_id'); });
        return automapper.map('BTCaseChatHistory', 'CaseChatHistory', model);
    };
    CasesMap.fromBTCaseChatHistoryTranscript = function (model) {
        automapper
            .createMap('BTCaseChatHistoryTranscript', 'CaseChatHistoryTranscript')
            .forMember('chatId', function (opts) { return opts.mapFrom('chat_id'); })
            .forMember('participantId', function (opts) {
            return opts.mapFrom('participant_id');
        });
        return automapper.map('BTCaseChatHistoryTranscript', 'CaseChatHistoryTranscript', model);
    };
    return CasesMap;
}());
exports.CasesMap = CasesMap;
//# sourceMappingURL=cases-map.js.map