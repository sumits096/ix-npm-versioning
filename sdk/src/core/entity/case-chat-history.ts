import { CaseChatHistoryTranscript } from '.';

export interface CaseChatHistory {
    id?: string;
    objectId?: string;
    objectScope?: string;
    chatType?: number;
    chatStatus?: number;
    billingStatus?: number;
    title?: string;
    subtitle?: string;
    durationPlus?: number;
    duration?: number;
    transcript: CaseChatHistoryTranscript;
    externalRpid?: string;
    externalLpid?: string;
    externalId?: string;
    created?: string;
    updated?: string;
}
