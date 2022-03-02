import { BaseResponseModel, CaseStatusModel } from ".";
export interface CaseStatusResponseModel extends BaseResponseModel {
    results: CaseStatusModel;
}
