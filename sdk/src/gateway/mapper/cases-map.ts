import {
    CaseChatHistory,
    CaseChatHistoryResponse,
    CaseChatHistoryTranscript,
    CaseDeEscalateOptions,
    CaseEscalateOptions,
    Cases,
    CasesCreateRequest,
    CasesCreateResponse,
    CasesInline,
    CasesInline0,
    CasesListOptions,
    CasesMetadata,
    CasesResponse,
    CaseStatusHistory,
    CaseStatusHistoryResponse,
} from '../../core/entity';
import {
    CaseChatHistoryModel,
    CaseChatHistoryResponseModel,
    CaseChatHistoryTranscriptModel,
    CaseDeEscalateOptionsModel,
    CaseEscalateOptionsModel,
    CasesCreateRequestModel,
    CasesCreateResponseModel,
    CasesInline0Model,
    CasesInlineModel,
    CasesListOptionsModel,
    CasesMetadataModel,
    CasesModel,
    CasesResponseModel,
    CaseStatusHistoryModel,
    CaseStatusHistoryResponseModel,
} from '../../core/models';

export class CasesMap {
    /**
     * Return entity Cases model from boomtown model
     * @param model boomtown Cases model.
     * @returns
     */
    static fromBTCases(model: CasesModel): Cases {
        automapper
            .createMap('BTCases', 'Cases')
            .forMember('id', (opts: AutoMapperJs.IMemberConfigurationOptions) => opts.mapFrom('id'))
            .forMember('referenceNum', (opts: AutoMapperJs.IMemberConfigurationOptions) =>
                opts.mapFrom('reference_num'),
            )
            .forMember('remoteId', (opts: AutoMapperJs.IMemberConfigurationOptions) => opts.mapFrom('remote_id'))
            .forMember('displayName', (opts: AutoMapperJs.IMemberConfigurationOptions) => opts.mapFrom('display_name'))
            .forMember('customerId', (opts: AutoMapperJs.IMemberConfigurationOptions) => opts.mapFrom('customer_id'))
            .forMember('customerName', (opts: AutoMapperJs.IMemberConfigurationOptions) =>
                opts.mapFrom('customer_name'),
            )
            .forMember('customerEmail', (opts: AutoMapperJs.IMemberConfigurationOptions) =>
                opts.mapFrom('customer_email'),
            )
            .forMember('customerLocationId', (opts: AutoMapperJs.IMemberConfigurationOptions) =>
                opts.mapFrom('customer_location_id'),
            )
            .forMember('customerLocationName', (opts: AutoMapperJs.IMemberConfigurationOptions) =>
                opts.mapFrom('customer_location_name'),
            )
            .forMember('customerContactId', (opts: AutoMapperJs.IMemberConfigurationOptions) =>
                opts.mapFrom('customer_user_id'),
            )
            .forMember('customerContactName', (opts: AutoMapperJs.IMemberConfigurationOptions) =>
                opts.mapFrom('customer_user_name'),
            )
            .forMember('customerContactEmail', (opts: AutoMapperJs.IMemberConfigurationOptions) =>
                opts.mapFrom('customer_user_email'),
            )
            .forMember('userId', (opts: AutoMapperJs.IMemberConfigurationOptions) => opts.mapFrom('user_id'))
            .forMember('externalId', (opts: AutoMapperJs.IMemberConfigurationOptions) => opts.mapFrom('external_id'))
            .forMember('type', (opts: AutoMapperJs.IMemberConfigurationOptions) => opts.mapFrom('type'))
            .forMember('category', (opts: AutoMapperJs.IMemberConfigurationOptions) => opts.mapFrom('category'))
            .forMember('details', (opts: AutoMapperJs.IMemberConfigurationOptions) => opts.mapFrom('details'))
            .forMember('status', (opts: AutoMapperJs.IMemberConfigurationOptions) => opts.mapFrom('status'))
            .forMember('job', (opts: AutoMapperJs.IMemberConfigurationOptions) => opts.mapFrom('job'))
            .forMember('resolution', (opts: AutoMapperJs.IMemberConfigurationOptions) => opts.mapFrom('resolution'))
            .forMember('created', (opts: AutoMapperJs.IMemberConfigurationOptions) => opts.mapFrom('created'))
            .forMember('updated', (opts: AutoMapperJs.IMemberConfigurationOptions) => opts.mapFrom('updated'))
            .forMember('scheduledTime', (opts: AutoMapperJs.IMemberConfigurationOptions) =>
                opts.mapFrom('scheduled_time'),
            )
            .forMember('enrouteTime', (opts: AutoMapperJs.IMemberConfigurationOptions) => opts.mapFrom('enroute_time'))
            .forMember('arrivalTime', (opts: AutoMapperJs.IMemberConfigurationOptions) => opts.mapFrom('arrival_time'))
            .forMember('departureTime', (opts: AutoMapperJs.IMemberConfigurationOptions) =>
                opts.mapFrom('departure_time'),
            )
            .forMember('idrIsq', (opts: AutoMapperJs.IMemberConfigurationOptions) => opts.mapFrom('idr_isq'))
            .forMember('idrProcess', (opts: AutoMapperJs.IMemberConfigurationOptions) => opts.mapFrom('idr_process'))
            .forMember('idrResolution', (opts: AutoMapperJs.IMemberConfigurationOptions) =>
                opts.mapFrom('idr_resolution'),
            )
            .forMember('techSupportMinutes', (opts: AutoMapperJs.IMemberConfigurationOptions) =>
                opts.mapFrom('tech_support_minutes'),
            )
            .forMember('specialNotes', (opts: AutoMapperJs.IMemberConfigurationOptions) =>
                opts.mapFrom('special_notes'),
            )
            .forMember('unmanaged', (opts: AutoMapperJs.IMemberConfigurationOptions) => opts.mapFrom('unmanaged'))
            .forMember('ownerOrgTeamId', (opts: AutoMapperJs.IMemberConfigurationOptions) =>
                opts.mapFrom('owner_org_team_id'),
            )
            .forMember('sponsorOrgTeamId', (opts: AutoMapperJs.IMemberConfigurationOptions) =>
                opts.mapFrom('sponsor_org_team_id'),
            )
            .forMember('tags', (opts: AutoMapperJs.IMemberConfigurationOptions) => opts.mapFrom('tags'))
            .forMember('categoryNew', (opts: AutoMapperJs.IMemberConfigurationOptions) => opts.mapFrom('category_new'))
            .forMember('membersDevices', CasesMap.fromBTCasesInlineList(model.members_devices))
            .forMember('kbArticles', CasesMap.fromBTCasesInline0List(model.kb_articles))
            .forMember('metadataValues', CasesMap.fromBTCasesMetadata(model.metadata_values))
            .ignoreAllNonExisting();
        return automapper.map('BTCases', 'Cases', model) as Cases;
    }

    /**
     * Return boomtown Cases request model from entity Cases model
     * @param model Cases entity model.
     * @returns
     */
    static toBTRequestModel(model: CasesCreateRequest): CasesCreateRequestModel {
        automapper
            .createMap('CasesCreateRequest', 'BTCasesCreateRequest')
            .forMember('issues', this.toBTCases(model.cases));

        return automapper.map('CasesCreateRequest', 'BTCasesCreateRequest', model) as CasesCreateRequestModel;
    }

    /**
     * Return boomtown Cases model from entity Cases model
     * @param model entity Cases model.
     * @returns
     */
    static toBTCases(model: Cases): CasesModel {
        automapper
            .createMap('Cases', 'BTCases')
            .forMember('id', (opts: AutoMapperJs.IMemberConfigurationOptions) => opts.mapFrom('id'))
            .forMember('reference_num', (opts: AutoMapperJs.IMemberConfigurationOptions) =>
                opts.mapFrom('referenceNum'),
            )
            .forMember('remote_id', (opts: AutoMapperJs.IMemberConfigurationOptions) => opts.mapFrom('remoteId'))
            .forMember('display_name', (opts: AutoMapperJs.IMemberConfigurationOptions) => opts.mapFrom('displayName'))
            .forMember('customer_id', (opts: AutoMapperJs.IMemberConfigurationOptions) => opts.mapFrom('customerId'))
            .forMember('customer_name', (opts: AutoMapperJs.IMemberConfigurationOptions) =>
                opts.mapFrom('customerName'),
            )
            .forMember('customer_email', (opts: AutoMapperJs.IMemberConfigurationOptions) =>
                opts.mapFrom('customerEmail'),
            )
            .forMember('customer_location_id', (opts: AutoMapperJs.IMemberConfigurationOptions) =>
                opts.mapFrom('customerLocationId'),
            )
            .forMember('customer_location_name', (opts: AutoMapperJs.IMemberConfigurationOptions) =>
                opts.mapFrom('customerLocationName'),
            )
            .forMember('customer_user_id', (opts: AutoMapperJs.IMemberConfigurationOptions) =>
                opts.mapFrom('customerContactId'),
            )
            .forMember('customer_user_name', (opts: AutoMapperJs.IMemberConfigurationOptions) =>
                opts.mapFrom('customerContactName'),
            )
            .forMember('customer_user_email', (opts: AutoMapperJs.IMemberConfigurationOptions) =>
                opts.mapFrom('customerContactEmail'),
            )
            .forMember('user_id', (opts: AutoMapperJs.IMemberConfigurationOptions) => opts.mapFrom('userId'))
            .forMember('external_id', (opts: AutoMapperJs.IMemberConfigurationOptions) => opts.mapFrom('externalId'))
            .forMember('type', (opts: AutoMapperJs.IMemberConfigurationOptions) => opts.mapFrom('type'))
            .forMember('category', (opts: AutoMapperJs.IMemberConfigurationOptions) => opts.mapFrom('category'))
            .forMember('details', (opts: AutoMapperJs.IMemberConfigurationOptions) => opts.mapFrom('details'))
            .forMember('status', (opts: AutoMapperJs.IMemberConfigurationOptions) => opts.mapFrom('status'))
            .forMember('job', (opts: AutoMapperJs.IMemberConfigurationOptions) => opts.mapFrom('job'))
            .forMember('resolution', (opts: AutoMapperJs.IMemberConfigurationOptions) => opts.mapFrom('resolution'))
            .forMember('created', (opts: AutoMapperJs.IMemberConfigurationOptions) => opts.mapFrom('created'))
            .forMember('updated', (opts: AutoMapperJs.IMemberConfigurationOptions) => opts.mapFrom('updated'))
            .forMember('scheduled_time', (opts: AutoMapperJs.IMemberConfigurationOptions) =>
                opts.mapFrom('scheduledTime'),
            )
            .forMember('enroute_time', (opts: AutoMapperJs.IMemberConfigurationOptions) => opts.mapFrom('enrouteTime'))
            .forMember('arrival_time', (opts: AutoMapperJs.IMemberConfigurationOptions) => opts.mapFrom('arrivalTime'))
            .forMember('departure_time', (opts: AutoMapperJs.IMemberConfigurationOptions) =>
                opts.mapFrom('departureTime'),
            )
            .forMember('idr_isq', (opts: AutoMapperJs.IMemberConfigurationOptions) => opts.mapFrom('idrIsq'))
            .forMember('idr_process', (opts: AutoMapperJs.IMemberConfigurationOptions) => opts.mapFrom('idrProcess'))
            .forMember('idr_resolution', (opts: AutoMapperJs.IMemberConfigurationOptions) =>
                opts.mapFrom('idrResolution'),
            )
            .forMember('tech_support_minutes', (opts: AutoMapperJs.IMemberConfigurationOptions) =>
                opts.mapFrom('techSupportMinutes'),
            )
            .forMember('special_notes', (opts: AutoMapperJs.IMemberConfigurationOptions) =>
                opts.mapFrom('specialNotes'),
            )
            .forMember('unmanaged', (opts: AutoMapperJs.IMemberConfigurationOptions) => opts.mapFrom('unmanaged'))
            .forMember('owner_org_team_id', (opts: AutoMapperJs.IMemberConfigurationOptions) =>
                opts.mapFrom('ownerOrgTeamId'),
            )
            .forMember('sponsor_org_team_id', (opts: AutoMapperJs.IMemberConfigurationOptions) =>
                opts.mapFrom('sponsorOrgTeamId'),
            )
            .forMember('tags', (opts: AutoMapperJs.IMemberConfigurationOptions) => opts.mapFrom('tags'))
            .forMember('category_new', (opts: AutoMapperJs.IMemberConfigurationOptions) => opts.mapFrom('categoryNew'))
            .forMember('members_devices', CasesMap.toBTCasesInlineList(model.membersDevices))
            .forMember('kb_articles', CasesMap.toBTCasesInline0List(model.kbArticles))
            .forMember('metadata_values', CasesMap.toBTCasesMetadata(model.metadataValues))
            .ignoreAllNonExisting();

        return automapper.map('Cases', 'BTCases', model) as CasesModel;
    }

    /**
     * Return api response model
     * @param responseModel
     * @returns
     */
    static casesResponse(responseModel: CasesResponseModel): CasesResponse {
        const list = responseModel.results;
        const casesList = list.map(function transform(cases: CasesModel) {
            return CasesMap.fromBTCases(cases);
        });

        automapper
            .createMap('BTCasesResponse', 'CasesResponse')
            .forMember('currentServerTime', (opts: AutoMapperJs.IMemberConfigurationOptions) =>
                opts.mapFrom('current_server_time'),
            )
            .forMember('results', casesList);

        return automapper.map('BTCasesResponse', 'CasesResponse', responseModel) as CasesResponse;
    }

    /**
     * Return api create response model
     * @param model
     * @returns
     */
    static casesCreateResponse(responseModel: CasesCreateResponseModel): CasesCreateResponse {
        const tuple = responseModel.results;
        const model: Cases = CasesMap.fromBTCases(tuple);

        automapper
            .createMap('BTCasesCreateResponse', 'CasesCreateResponse')
            .forMember('currentServerTime', (opts: AutoMapperJs.IMemberConfigurationOptions) =>
                opts.mapFrom('current_server_time'),
            )
            .forMember('results', model);

        return automapper.map('BTCasesCreateResponse', 'CasesCreateResponse', responseModel) as CasesCreateResponse;
    }

    /**
     * Return entity Cases inline model from boomtown model
     * @param model boomtown Cases inline model.
     * @returns
     */
    static fromBTCasesInline(model: CasesInlineModel): CasesInline {
        automapper
            .createMap('BTCasesInline', 'CasesInline')
            .forMember('productId', (opts: AutoMapperJs.IMemberConfigurationOptions) => opts.mapFrom('product_id'));
        return automapper.map('BTCasesInline', 'CasesInline', model) as CasesInline;
    }

    /**
     * Return entity Cases inline model from boomtown model
     * @param model boomtown Cases inline model.
     * @returns
     */
    static toBTCasesInline(model: CasesInline): CasesInlineModel {
        automapper
            .createMap('CasesInline', 'BTCasesInline')
            .forMember('product_id', (opts: AutoMapperJs.IMemberConfigurationOptions) => opts.mapFrom('productId'));

        return automapper.map('CasesInline', 'BTCasesInline', model) as CasesInlineModel;
    }

    /**
     * Return entity Cases inline model from boomtown model
     * @param files boomtown Cases inline model.
     * @returns
     */
    static fromBTCasesInlineList(casesList?: CasesInlineModel[]): CasesInline[] {
        const model = casesList ? casesList : ([] as CasesInlineModel[]);

        return model.map(function transform(cases: CasesInlineModel) {
            return CasesMap.fromBTCasesInline(cases);
        });
    }

    /**
     * Return boomtown cases inline model from entity cases inline model
     * @param files array of entity cases inline model.
     * @returns
     */
    static toBTCasesInlineList(casesList?: CasesInline[]): CasesInlineModel[] {
        const model = casesList ? casesList : ([] as CasesInline[]);

        return model.map(function transform(cases: CasesInline) {
            return CasesMap.toBTCasesInline(cases);
        });
    }

    /**
     * Return entity Cases inline model from boomtown model
     * @param model boomtown inline Cases model.
     * @returns
     */
    static fromBTCasesInline0(model: CasesInline0Model): CasesInline0 {
        automapper.createMap('BTCasesInline0', 'CasesInline0');

        return automapper.map('BTCasesInline0', 'CasesInline0', model) as CasesInline0;
    }

    /**
     * Return entity Cases inline model from boomtown model
     * @param model boomtown Cases inline model.
     * @returns
     */
    static toBTCasesInline0(model: CasesInline0): CasesInline0Model {
        automapper.createMap('CasesInline0', 'BTCasesInline0');

        return automapper.map('CasesInline0', 'BTCasesInline0', model) as CasesInline0Model;
    }

    /**
     * Return entity Cases inline model from boomtown model
     * @param files boomtown Cases inline model.
     * @returns
     */
    static fromBTCasesInline0List(casesList?: CasesInline0Model[]): CasesInline0[] {
        const model = casesList ? casesList : ([] as CasesInline0Model[]);

        return model.map(function transform(cases: CasesInline0Model) {
            return CasesMap.fromBTCasesInline0(cases);
        });
    }

    /**
     * Return boomtown cases inline model from entity cases inline model
     * @param files array of entity cases inline model.
     * @returns
     */
    static toBTCasesInline0List(casesList?: CasesInline0[]): CasesInline0Model[] {
        const model = casesList ? casesList : ([] as CasesInline0[]);

        return model.map(function transform(cases: CasesInline0) {
            return CasesMap.toBTCasesInline0(cases);
        });
    }

    /**
     * Return entity Cases metadata model from boomtown model
     * @param model boomtown Cases metadata model.
     * @returns
     */
    static fromBTCasesMetadata(model: CasesMetadataModel): CasesMetadata {
        automapper
            .createMap('BTCasesMetadata', 'CasesMetadata')
            .forMember('preferredInstallDate', (opts: AutoMapperJs.IMemberConfigurationOptions) =>
                opts.mapFrom('preferred_install_date'),
            )
            .forMember('preferredTimeFrame', (opts: AutoMapperJs.IMemberConfigurationOptions) =>
                opts.mapFrom('preferred_time_frame'),
            )
            .forMember('alternateInstallDate', (opts: AutoMapperJs.IMemberConfigurationOptions) =>
                opts.mapFrom('alternate_install_date'),
            )
            .forMember('alternateTimeFrame', (opts: AutoMapperJs.IMemberConfigurationOptions) =>
                opts.mapFrom('alternate_time_frame'),
            )
            .forMember('numberOfPosDevices', (opts: AutoMapperJs.IMemberConfigurationOptions) =>
                opts.mapFrom('number_of_pos_devices '),
            );

        return automapper.map('BTCasesMetadata', 'CasesMetadata', model) as CasesMetadata;
    }

    /**
     * Return entity Cases metadata model from boomtown model
     * @param model boomtown Cases metadata model.
     * @returns
     */
    static toBTCasesMetadata(model: CasesMetadata): CasesMetadataModel {
        automapper
            .createMap('CasesMetadata', 'BTCasesMetadata')
            .forMember('preferred_install_date', (opts: AutoMapperJs.IMemberConfigurationOptions) =>
                opts.mapFrom('preferredInstallDate'),
            )
            .forMember('preferred_time_frame', (opts: AutoMapperJs.IMemberConfigurationOptions) =>
                opts.mapFrom('preferredTimeFrame'),
            )
            .forMember('alternate_install_date', (opts: AutoMapperJs.IMemberConfigurationOptions) =>
                opts.mapFrom('alternateInstallDate'),
            )
            .forMember('alternate_time_frame', (opts: AutoMapperJs.IMemberConfigurationOptions) =>
                opts.mapFrom('alternateTimeFrame'),
            )
            .forMember('number_of_pos_devices', (opts: AutoMapperJs.IMemberConfigurationOptions) =>
                opts.mapFrom('numberOfPosDevices '),
            );

        return automapper.map('CasesMetadata', 'BTCasesMetadata', model) as CasesMetadataModel;
    }

    /**
     * Return entity Cases options model from boomtown model
     * @param model boomtown Cases options model.
     * @returns
     */
    static toBTCasesOptionsModel(model: CasesListOptions): CasesListOptionsModel {
        automapper
            .createMap('CasesListOptions', 'BTCasesListOptions')
            .forMember('customer_id', (opts: AutoMapperJs.IMemberConfigurationOptions) => opts.mapFrom('customerId'))
            .forMember('customers_users_id', (opts: AutoMapperJs.IMemberConfigurationOptions) =>
                opts.mapFrom('customersUsersId'),
            )
            .forMember('customer_location_id', (opts: AutoMapperJs.IMemberConfigurationOptions) =>
                opts.mapFrom('customerLocationId'),
            );

        return automapper.map('CasesListOptions', 'BTCasesListOptions', model) as CasesListOptionsModel;
    }

    /**
     * Return entity Cases status model from boomtown model
     * @param model boomtown Cases status model.
     * @returns
     */
    static fromBTCaseStatus(model: CaseStatusHistoryModel): CaseStatusHistory {
        automapper
            .createMap('BTCaseStatus', 'CaseStatus')
            .forMember('scheduledTime', (opts: AutoMapperJs.IMemberConfigurationOptions) =>
                opts.mapFrom('scheduled_time'),
            );

        return automapper.map('BTCaseStatus', 'CaseStatus', model) as CaseStatusHistory;
    }

    /**
     * Return entity Cases status model from boomtown model
     * @param model boomtown Cases status model.
     * @returns
     */
    static toBTCaseStatus(model: CaseStatusHistory): CaseStatusHistoryModel {
        automapper
            .createMap('CaseStatus', 'BTCaseStatus')
            .forMember('scheduled_time', (opts: AutoMapperJs.IMemberConfigurationOptions) =>
                opts.mapFrom('scheduledTime'),
            );

        return automapper.map('CaseStatus', 'BTCaseStatus', model) as CaseStatusHistoryModel;
    }

    /**
     * Return CaseEscalateOptionsModel model from entity CaseEscalateOptions
     * @param model for CaseEscalateOptions
     * @returns
     */
    static toBTCaseEscalateOptions(model: CaseEscalateOptions): CaseEscalateOptionsModel {
        automapper
            .createMap('CaseEscalate', 'BTCaseEscalate')
            .forMember('org_team_id', (opts: AutoMapperJs.IMemberConfigurationOptions) => opts.mapFrom('orgTeamId'))
            .forMember('user_id', (opts: AutoMapperJs.IMemberConfigurationOptions) => opts.mapFrom('userId'))
            .forMember('alert_collaborators', (opts: AutoMapperJs.IMemberConfigurationOptions) =>
                opts.mapFrom('alertCollaborators'),
            );

        return automapper.map('CaseEscalate', 'BTCaseEscalate', model) as CaseEscalateOptionsModel;
    }

    /**
     * Return CaseDeEscalateOptionsModel model from entity CaseDeEscalateOptions
     * @param model for CaseDeEscalateOptions
     * @returns
     */
    static toBTCaseDeEscalateOptions(model: CaseDeEscalateOptions): CaseDeEscalateOptionsModel {
        automapper
            .createMap('CaseDeEscalate', 'BTCaseDeEscalate')
            .forMember('org_team_id', (opts: AutoMapperJs.IMemberConfigurationOptions) => opts.mapFrom('orgTeamId'))
            .forMember('user_id', (opts: AutoMapperJs.IMemberConfigurationOptions) => opts.mapFrom('userId'));

        return automapper.map('CaseDeEscalate', 'BTCaseDeEscalate', model) as CaseDeEscalateOptionsModel;
    }

    /**
     * Return entity CaseStatusHistoryResponse from boomtown CaseStatusHistoryResponseModel
     * @param model CaseStatusHistoryResponseModel.
     * @returns
     */
    static caseStatusHistoryResponse(responseModel: CaseStatusHistoryResponseModel): CaseStatusHistoryResponse {
        const list = responseModel.results;
        const model = list.map(function transform(statusHistory: CaseStatusHistoryModel) {
            return CasesMap.fromBTCaseStatusHistory(statusHistory);
        });

        automapper
            .createMap('BTCaseStatusHistory', 'CaseStatusHistory')
            .forMember('currentServerTime', (opts: AutoMapperJs.IMemberConfigurationOptions) =>
                opts.mapFrom('current_server_time'),
            )
            .forMember('results', model);

        return automapper.map('BTCaseStatusHistory', 'CaseStatusHistory', responseModel) as CaseStatusHistoryResponse;
    }

    /**
     * Return entity CaseStatusHistory from boomtown CaseStatusHistoryModel
     * @param model CaseStatusHistoryModel.
     * @returns
     */
    static fromBTCaseStatusHistory(model: CaseStatusHistoryModel): CaseStatusHistory {
        automapper
            .createMap('BTCaseStatusHistory', 'CaseStatusHistory')
            .forMember('scheduledTime', (opts: AutoMapperJs.IMemberConfigurationOptions) =>
                opts.mapFrom('scheduled_time'),
            );

        return automapper.map('BTCaseStatusHistory', 'CaseStatusHistory', model) as CaseStatusHistory;
    }

    /**
     * Return entity CaseChatHistoryResponse from boomtown CaseChatHistoryResponseModel
     * @param model CaseChatHistoryResponseModel.
     * @returns
     */
    static caseChatHistoryResponse(responseModel: CaseChatHistoryResponseModel): CaseChatHistoryResponse {
        const list = responseModel.results;
        const model = list.map(function transform(chatHistory: CaseChatHistoryModel) {
            return CasesMap.fromBTCaseChatHistory(chatHistory);
        });

        automapper
            .createMap('BTCaseChatHistory', 'CaseChatHistory')
            .forMember('currentServerTime', (opts: AutoMapperJs.IMemberConfigurationOptions) =>
                opts.mapFrom('current_server_time'),
            )
            .forMember('results', model);

        return automapper.map('BTCaseChatHistory', 'CaseChatHistory', responseModel) as CaseChatHistoryResponse;
    }

    /**
     * Return entity CaseChatHistoryModel from boomtown CaseChatHistory
     * @param model boomtown CaseChatHistoryModel.
     * @returns
     */
    static fromBTCaseChatHistory(model: CaseChatHistoryModel): CaseChatHistory {
        automapper
            .createMap('BTCaseChatHistory', 'CaseChatHistory')
            .forMember('objectId', (opts: AutoMapperJs.IMemberConfigurationOptions) => opts.mapFrom('object_id'))
            .forMember('objectScope', (opts: AutoMapperJs.IMemberConfigurationOptions) => opts.mapFrom('object_scope'))
            .forMember('chatType', (opts: AutoMapperJs.IMemberConfigurationOptions) => opts.mapFrom('chat_type'))
            .forMember('chatStatus', (opts: AutoMapperJs.IMemberConfigurationOptions) => opts.mapFrom('chat_status'))
            .forMember('billingStatus', (opts: AutoMapperJs.IMemberConfigurationOptions) =>
                opts.mapFrom('billing_status'),
            )
            .forMember('durationPlus', (opts: AutoMapperJs.IMemberConfigurationOptions) =>
                opts.mapFrom('duration_plus'),
            )
            .forMember('transcript', CasesMap.fromBTCaseChatHistoryTranscript(model.transcript))
            .forMember('externalRpid', (opts: AutoMapperJs.IMemberConfigurationOptions) =>
                opts.mapFrom('external_rpid'),
            )
            .forMember('externalLpid', (opts: AutoMapperJs.IMemberConfigurationOptions) =>
                opts.mapFrom('external_lpid'),
            )
            .forMember('externalId', (opts: AutoMapperJs.IMemberConfigurationOptions) => opts.mapFrom('external_id'));

        return automapper.map('BTCaseChatHistory', 'CaseChatHistory', model) as CaseChatHistory;
    }

    /**
     * Return entity Cases status model from boomtown model
     * @param model boomtown Cases status model.
     * @returns
     */
    static fromBTCaseChatHistoryTranscript(model: CaseChatHistoryTranscriptModel): CaseChatHistoryTranscript {
        automapper
            .createMap('BTCaseChatHistoryTranscript', 'CaseChatHistoryTranscript')
            .forMember('chatId', (opts: AutoMapperJs.IMemberConfigurationOptions) => opts.mapFrom('chat_id'))
            .forMember('participantId', (opts: AutoMapperJs.IMemberConfigurationOptions) =>
                opts.mapFrom('participant_id'),
            );

        return automapper.map(
            'BTCaseChatHistoryTranscript',
            'CaseChatHistoryTranscript',
            model,
        ) as CaseChatHistoryTranscript;
    }
}
