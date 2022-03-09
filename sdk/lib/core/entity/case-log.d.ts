import { Highlightmap, CaseLogInteractionEvent, CaseLogCreate } from '.';
export interface CaseLog {
    id: CaseLogCreate;
    issuesId: string;
    usersFullName: string;
    usersNickname: string;
    usersCertifications: string[];
    diffLog: string;
    interactionEvent: CaseLogInteractionEvent;
    notes: CaseLogCreate;
    created: string;
    eventCategory: string;
    eventCategoryLabel: string;
    eventType: string;
    eventTypeLabel: string;
    fromIssueSave: false;
    highlighted: false;
    highlightmap: Highlightmap;
}
