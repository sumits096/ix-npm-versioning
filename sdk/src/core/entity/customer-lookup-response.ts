import { BaseResponse, CustomerLookupTuple } from '.';

export interface CustomerLookupResponse extends BaseResponse {
    results: CustomerLookupTuple
}
