import { BaseResponseModel, CaseStatusHistoryModel } from ".";
export interface CaseStatusHistoryResponseModel extends BaseResponseModel {
    results: CaseStatusHistoryModel[];
}
