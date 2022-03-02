import { BaseResponse } from '.';

export interface SSOResponse extends BaseResponse {
    authtoken?: string;
    url?: string;
}
