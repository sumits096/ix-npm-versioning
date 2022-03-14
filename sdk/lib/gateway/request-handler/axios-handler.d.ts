import { ApiClient } from './interfaces/apiClient';
import { ApiRequestModel } from '../../core/models';
export declare class AxiosHandler implements ApiClient {
    request(apiRequestModel: ApiRequestModel, sign: string, timestamp: Date): Promise<import("axios").AxiosResponse<any, any>>;
}
