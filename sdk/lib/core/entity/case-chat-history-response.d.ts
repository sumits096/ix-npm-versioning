import { BaseResponse, CaseChatHistory } from ".";
export interface CaseChatHistoryResponse extends BaseResponse {
    results: CaseChatHistory[];
}
