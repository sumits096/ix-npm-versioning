import { ApiRequestModel } from '../../core/models/client-request-model';
import { AxiosHandler } from '../request-handler';
export declare class BoomtownClient {
    private readonly axiosHandler;
    constructor(axiosHandler: AxiosHandler);
    request(apiRequestModel: ApiRequestModel): Promise<import("axios").AxiosResponse<any, any>>;
}
