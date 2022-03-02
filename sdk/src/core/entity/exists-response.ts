import { BaseResponse } from '.';

export interface ExistsResponse extends BaseResponse {
    exists: boolean;
}
