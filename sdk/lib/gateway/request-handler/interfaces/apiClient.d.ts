import { ApiRequestModel } from '../../../core/models';
export interface ApiClient {
    request(apiRequestModel: ApiRequestModel, sign: string, timestamp: Date): any;
}
