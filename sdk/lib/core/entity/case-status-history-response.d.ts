import { BaseResponse, CaseStatusHistory } from ".";
export interface CaseStatusHistoryResponse extends BaseResponse {
    results: CaseStatusHistory[];
}
