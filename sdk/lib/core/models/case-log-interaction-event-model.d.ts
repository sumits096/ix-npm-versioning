import { InteractionEventBodyModel, InteractionEventRefsModel, InteractionEventTypeModel, CaseLogCreateModel, InteractionEventCategoryModel } from '.';
export interface CaseLogInteractionEventModel {
    body: InteractionEventBodyModel;
    refs: InteractionEventRefsModel;
    type: InteractionEventTypeModel;
    log_id: CaseLogCreateModel;
    created: string;
    category: InteractionEventCategoryModel;
}
