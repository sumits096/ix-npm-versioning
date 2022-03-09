import { BaseResponse, CaseLog } from '.';
export interface CaseLogResponse extends BaseResponse {
    results?: CaseLog[];
}
