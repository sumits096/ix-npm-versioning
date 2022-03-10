 
//import { Inject, Injectable } from '@nestjs/common';
import { ApiRequestModel } from '../../core/models/client-request-model';
import { signature } from '../auth/signature';
import { AxiosHandler } from '../request-handler';
import { injectable, inject } from 'inversify';

/**
 * BoomtownClient class defining the methods that will send request to Boomtown API's.
 *
 * @BoomtownSDK
 */
@injectable()
export class BoomtownClient {
    constructor(
    @inject('AxiosHandler') 
    private readonly axiosHandler: AxiosHandler) {}

    /**
     * call to boomtown api based on http handler
     * @param apiRequestModel for customer payload.
     * @returns
     */
    async request(apiRequestModel: ApiRequestModel) {
        const timestamp = new Date();
        const sign = signature.create(apiRequestModel.url, timestamp, apiRequestModel.queryParameter);

        return this.axiosHandler.request(apiRequestModel, sign, timestamp);
    }
}
