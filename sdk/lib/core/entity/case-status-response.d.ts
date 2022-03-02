import { BaseResponse, CaseStatus } from ".";
export interface CaseStatusesResponse extends BaseResponse {
    results: CaseStatus;
}
