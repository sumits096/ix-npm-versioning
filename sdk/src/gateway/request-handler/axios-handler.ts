import axios, { AxiosRequestConfig, AxiosRequestHeaders } from 'axios';
import { ApiClient } from './interfaces/apiClient';
import { Credential } from '../../index';
import { ApiRequestModel } from '../../core/models';
import { detectQueryString } from '../../core/helpers';

export class AxiosHandler implements ApiClient {
    /**
     * Send request to boomtown api using axios HTTP handler
     * @param apiRequestModel
     * @param sign Hmac signature
     * @param timestamp time-stamp
     * @returns
     */
    request(apiRequestModel: ApiRequestModel, sign: string, timestamp: Date) {
        // create axios request header
        const axiosRequestHeader: AxiosRequestHeaders = {
            'X-Boomtown-Date': timestamp.toJSON(),
            'X-Boomtown-Token': Credential.token,
            'X-Boomtown-Signature': sign ? sign : '',
            Accept: apiRequestModel.formData ? 'multipart/form-data' : 'application/json',
        };

        // create axios request config
        const axiosRequestConfig: AxiosRequestConfig = {
            url: `${apiRequestModel.url}${detectQueryString(apiRequestModel.url) ? '&' : '?'}_=${timestamp.getTime()}`,
            data: apiRequestModel && apiRequestModel.body ? apiRequestModel.body : '',
            method: apiRequestModel.method,
            headers: axiosRequestHeader,
        };

        return axios.request(axiosRequestConfig);
    }
}
