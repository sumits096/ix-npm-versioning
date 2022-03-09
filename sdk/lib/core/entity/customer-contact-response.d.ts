import { BaseResponse, CustomerContact } from '.';
export interface CustomerContactResponse extends BaseResponse {
    results?: CustomerContact[];
}
