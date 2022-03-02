import { BaseResponse, Customer } from '.';

export interface CustomerResponse extends BaseResponse {
    results?: Customer[];
}
