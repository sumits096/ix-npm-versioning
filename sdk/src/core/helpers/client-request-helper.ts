import { Method } from 'axios';
import { ApiRequestModel } from '../models/client-request-model';

/**
 * return ApiRequestModel for boomtown gateway repository
 * @param url The API url.
 * @param {method} method The HTTP method to use (GET|POST|PUT|DELETE).
 * @param payload The value to pass as the request body.
 * @param optionsModel The values for records limit.
 * @param isFormData The values for FormData or FormBody.
 * @returns
 */
export function createApiRequest(url: string, httpMethod: Method, payload?: string, optionsModel?: any, isFormData?: boolean): ApiRequestModel {
    const queryParam = optionsModel ? createQueryParameter(optionsModel) : '';

    return {
        url: queryParam ? buildURL(url, queryParam) : url,
        method: httpMethod,
        body: payload,
        queryParameter: createQueryParameter(optionsModel),
        formData: isFormData ? isFormData : false
    };
}

/**
 * Return encoded query string for API
 * @param queryParameter For the parameter values to append.
 * @returns
 */
export function createQueryParameter(queryParameter: any): string {
    const pairs = [];
    for (const key in queryParameter) {
        if (queryParameter.hasOwnProperty(key)) {
            if (queryParameter[key]) {
                pairs.push(encodeURIComponent(key) + '=' + encodeURIComponent(queryParameter[key]));
            }
        }
    }

    return pairs.join('&');
}

/**
 * Return URL with query parameter.
 * @param url For API Url.
 * @param queryParameter For the parameter values to append.
 * @returns
 */
export function buildURL(url: string, queryParameter: string): string {
    return `${url}?${queryParameter ? queryParameter : ''}`;
}

/**
 * Verify the url contain query parameter or not
 * @param url for API
 * @returns
 */
export function detectQueryString(url: string) {
    const pattern = new RegExp(/\?.+=.*/g);

    return pattern.test(url);
}
