import { ApiRequestModel } from '../../../core/models';

/**
 * Defines methods to create http request
 */
export interface ApiClient {
    /**
     * call to boomtown api based on http handler
     * @param apiRequestModel for request payload.
     * @param sign for request signature.
     * @param timestamp for date time stamp
     */
    request(apiRequestModel: ApiRequestModel, sign: string, timestamp: Date): any;
}
