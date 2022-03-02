import { InteractionEventBody, InteractionEventRefs, InteractionEventType, InteractionEventCategory, CaseLogCreate } from '.';

export interface CaseLogInteractionEvent {
    body: InteractionEventBody;
    refs: InteractionEventRefs;
    type: InteractionEventType;
    logId: CaseLogCreate;
    created: string;
    category: InteractionEventCategory;
}
