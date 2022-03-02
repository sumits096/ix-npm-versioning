import { BaseResponseModel } from '.';

export interface SSOResponseModel extends BaseResponseModel {
    authtoken?: string;
    url?: string;
}
