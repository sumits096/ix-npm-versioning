import { BaseResponse, Cases } from '.';

export interface CasesCreateRequest extends BaseResponse {
    cases: Cases;
}
