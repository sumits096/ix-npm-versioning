import { BaseResponse, Cases } from '.';

export interface CasesCreateResponse extends BaseResponse {
    results?: Cases;
}
