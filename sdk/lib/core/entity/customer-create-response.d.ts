import { BaseResponse, CustomerTuple } from '.';
export interface CustomerCreateResponse extends BaseResponse {
    results?: CustomerTuple;
}
