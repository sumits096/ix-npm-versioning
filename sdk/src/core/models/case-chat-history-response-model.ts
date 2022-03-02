import { BaseResponseModel, CaseChatHistoryModel } from ".";

export interface CaseChatHistoryResponseModel extends BaseResponseModel {
    results: CaseChatHistoryModel[];
}
