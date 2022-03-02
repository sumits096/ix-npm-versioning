import {
    CaseLog,
    CaseLogResponse,
    Highlightmap,
    InteractionEventBody,
    InteractionEventRefs,
    InteractionEventType,
    InteractionEventCategory,
    CaseLogInteractionEvent
} from '../../core/entity';

import {
    CaseLogModel,
    CaseLogResponseModel,
    HighlightmapModel,
    InteractionEventBodyModel,
    InteractionEventRefsModel,
    InteractionEventTypeModel,
    InteractionEventCategoryModel,
    CaseLogInteractionEventModel
} from '../../core/models';

export class CaseLogMapper {
    /**
     * Return api response model
     * @param responseModel
     * @returns
     */
    static caseLogResponse(responseModel: CaseLogResponseModel): CaseLogResponse {
        const list = responseModel.results;
        const casesLog = list.map(function transform(caseLog: CaseLogModel) {
            return CaseLogMapper.fromBTCaseLog(caseLog);
        });

        automapper
            .createMap('BTCaseLogResponse', 'CaseLogResponse')
            .forMember('currentServerTime', (opts: AutoMapperJs.IMemberConfigurationOptions) =>
                opts.mapFrom('current_server_time'),
            )
            .forMember('results', casesLog);

        return automapper.map('BTCaseLogResponse', 'CaseLogResponse', responseModel) as CaseLogResponse;
    }

    /**
     * Return entity files from boomtown model
     * @param model boomtown case log model.
     * @returns
     */
    static fromBTCaseLog(model: CaseLogModel): CaseLog {
        automapper
            .createMap('BTCaseLog', 'CaseLog')
            .forMember('id', (opts: AutoMapperJs.IMemberConfigurationOptions) => opts.mapFrom('id'))
            .forMember('issuesId', (opts: AutoMapperJs.IMemberConfigurationOptions) => opts.mapFrom('issues_id'))
            .forMember('usersFullName', (opts: AutoMapperJs.IMemberConfigurationOptions) => opts.mapFrom('users_full_name'))
            .forMember('usersNickname', (opts: AutoMapperJs.IMemberConfigurationOptions) => opts.mapFrom('users_nickname'))
            .forMember('usersCertifications', (opts: AutoMapperJs.IMemberConfigurationOptions) => opts.mapFrom('users_certifications'))
            .forMember('diffLog', (opts: AutoMapperJs.IMemberConfigurationOptions) => opts.mapFrom('diff_log'))
            .forMember('interactionEvent', this.fromBTCaseLogInteractionEvent(JSON.parse(model.interaction_event)))
            .forMember('notes', (opts: AutoMapperJs.IMemberConfigurationOptions) => opts.mapFrom('notes'))
            .forMember('created', (opts: AutoMapperJs.IMemberConfigurationOptions) => opts.mapFrom('created'))
            .forMember('eventCategory', (opts: AutoMapperJs.IMemberConfigurationOptions) => opts.mapFrom('event_category'))
            .forMember('eventCategoryLabel', (opts: AutoMapperJs.IMemberConfigurationOptions) => opts.mapFrom('event_category_label'))
            .forMember('eventType', (opts: AutoMapperJs.IMemberConfigurationOptions) => opts.mapFrom('event_type'))
            .forMember('e`ventTypeLabel', (opts: AutoMapperJs.IMemberConfigurationOptions) => opts.mapFrom('event_type_label'))
            .forMember('fromIssueSave', (opts: AutoMapperJs.IMemberConfigurationOptions) => opts.mapFrom('fromIssueSave'))
            .forMember('highlighted', (opts: AutoMapperJs.IMemberConfigurationOptions) => opts.mapFrom('_highlighted'))
            .forMember('highlightmap', this.fromBTHighlightmap(model._highlightmap))
            .ignoreAllNonExisting();
        return automapper.map('BTCaseLog', 'CaseLog', model) as CaseLog;
    }

    /**
    * Return body model from entity case file upload
    * @param model body request model
    * @returns
    */
    static fromBTInteractionEventBody(model: InteractionEventBodyModel): InteractionEventBody {
        const data = model ? model : {} as InteractionEventBodyModel;
        automapper.createMap('BTInteractionEventBody', 'InteractionEventBody')
            .forMember('data', (opts: AutoMapperJs.IMemberConfigurationOptions) => opts.mapFrom('data'))
            .forMember('type', (opts: AutoMapperJs.IMemberConfigurationOptions) => opts.mapFrom('type'))
        return automapper.map('BTInteractionEventBody', 'InteractionEventBody', data) as InteractionEventBody;
    }

    /**
     * Return refs model from entity case file upload
     * @param model refs request model
     * @returns
     */
    static fromBTInteractionEventRefs(model: InteractionEventRefsModel): InteractionEventRefs {
        const data = model ? model : {} as InteractionEventRefsModel;
        automapper.createMap('BTInteractionEventRefs', 'InteractionEventRefs')
            .forMember('objetcts', (opts: AutoMapperJs.IMemberConfigurationOptions) => opts.mapFrom('objects'))
            .forMember('source', (opts: AutoMapperJs.IMemberConfigurationOptions) => opts.mapFrom('source'))
        return automapper.map('BTInteractionEventRefs', 'InteractionEventRefs', data) as InteractionEventRefs;
    }

    /**
    * Return type model from entity case file upload
    * @param model type request model
    * @returns
    */
    static fromBTInteractionEventType(model: InteractionEventTypeModel): InteractionEventType {
        const data = model ? model : {} as InteractionEventTypeModel;
        automapper.createMap('BTInteractionEventType', 'InteractionEventType')
            .forMember('id', (opts: AutoMapperJs.IMemberConfigurationOptions) => opts.mapFrom('id'))
            .forMember('label', (opts: AutoMapperJs.IMemberConfigurationOptions) => opts.mapFrom('label'))
        return automapper.map('BTInteractionEventType', 'InteractionEventType', data) as InteractionEventType;
    }

     /**
    * Return category model from entity case file upload
    * @param model category request model
    * @returns
    */
      static fromBTInteractionEventCategory(model: InteractionEventCategoryModel): InteractionEventCategory {
        const data = model ? model : {} as InteractionEventCategoryModel;
        automapper.createMap('BTInteractionEventCategory', 'InteractionEventCategory')
            .forMember('id', (opts: AutoMapperJs.IMemberConfigurationOptions) => opts.mapFrom('id'))
            .forMember('label', (opts: AutoMapperJs.IMemberConfigurationOptions) => opts.mapFrom('label'))
        return automapper.map('BTInteractionEventCategory', 'InteractionEventCategory', data) as InteractionEventCategory;
    }

    /**
    * Return interaction event model from entity case file upload
    * @param model interaction event request model
    * @returns
    */
    static fromBTCaseLogInteractionEvent(model: CaseLogInteractionEventModel): CaseLogInteractionEvent {
        const data = model ? model : {} as CaseLogInteractionEventModel;
        automapper.createMap('BTCaseLogInteractionEvent', 'CaseLogInteractionEvent')
            .forMember('body', this.fromBTInteractionEventBody(data.body))
            .forMember('refs', this.fromBTInteractionEventRefs(data.refs))
            .forMember('type', this.fromBTInteractionEventType(data.type))
            .forMember('logId', (opts: AutoMapperJs.IMemberConfigurationOptions) => opts.mapFrom('log_id'))
            .forMember('created', (opts: AutoMapperJs.IMemberConfigurationOptions) => opts.mapFrom('created'))
            .forMember('category', this.fromBTInteractionEventCategory(data.category))
            .ignoreAllNonExisting();
        return automapper.map('BTCaseLogInteractionEvent', 'CaseLogInteractionEvent', data) as CaseLogInteractionEvent;
    }


    /**
    * Return highlightmap model from entity case file upload
    * @param model highlightmap request model
    * @returns
    */
    static fromBTHighlightmap(model?: HighlightmapModel): Highlightmap {

        automapper.createMap('BTHighlightmap', 'Highlightmap');
        return automapper.map('BTHighlightmap', 'Highlightmap', model,) as Highlightmap;

    }
}
