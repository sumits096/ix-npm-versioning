import { ApiClient } from './interfaces/apiClient';
import { ApiRequestModel } from '../../core/models';
export declare class AxiosHandler implements ApiClient {
    constructor();
    request(apiRequestModel: ApiRequestModel, sign: string, timestamp: Date): Promise<import("axios").AxiosResponse<any, any>>;
}
