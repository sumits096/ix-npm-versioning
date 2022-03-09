import { CaseLog, CaseLogResponse, Highlightmap, InteractionEventBody, InteractionEventRefs, InteractionEventType, InteractionEventCategory, CaseLogInteractionEvent } from '../../core/entity';
import { CaseLogModel, CaseLogResponseModel, HighlightmapModel, InteractionEventBodyModel, InteractionEventRefsModel, InteractionEventTypeModel, InteractionEventCategoryModel, CaseLogInteractionEventModel } from '../../core/models';
export declare class CaseLogMapper {
    static caseLogResponse(responseModel: CaseLogResponseModel): CaseLogResponse;
    static fromBTCaseLog(model: CaseLogModel): CaseLog;
    static fromBTInteractionEventBody(model: InteractionEventBodyModel): InteractionEventBody;
    static fromBTInteractionEventRefs(model: InteractionEventRefsModel): InteractionEventRefs;
    static fromBTInteractionEventType(model: InteractionEventTypeModel): InteractionEventType;
    static fromBTInteractionEventCategory(model: InteractionEventCategoryModel): InteractionEventCategory;
    static fromBTCaseLogInteractionEvent(model: CaseLogInteractionEventModel): CaseLogInteractionEvent;
    static fromBTHighlightmap(model?: HighlightmapModel): Highlightmap;
}
