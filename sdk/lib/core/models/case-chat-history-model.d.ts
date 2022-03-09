import { CaseChatHistoryTranscriptModel } from '.';
export interface CaseChatHistoryModel {
    id?: string;
    object_id?: string;
    object_scope?: string;
    chat_type?: number;
    chat_status?: number;
    billing_status?: number;
    title?: string;
    subtitle?: string;
    duration_plus?: number;
    duration?: number;
    transcript: CaseChatHistoryTranscriptModel;
    external_rpid?: string;
    external_lpid?: string;
    external_id?: string;
    created?: string;
    updated?: string;
}
