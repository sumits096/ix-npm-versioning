import { BaseResponse, CustomerTuple } from '.';
export interface CustomerLocationCreateResponse extends BaseResponse {
    results?: CustomerTuple;
}
