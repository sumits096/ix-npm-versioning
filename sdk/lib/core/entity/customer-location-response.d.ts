import { BaseResponse, CustomerLocation } from '.';
export interface CustomerLocationResponse extends BaseResponse {
    results?: CustomerLocation[];
}
