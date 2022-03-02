import { BaseResponse, Cases } from '.';

export interface CasesResponse extends BaseResponse {
    results?: Cases[];
}
