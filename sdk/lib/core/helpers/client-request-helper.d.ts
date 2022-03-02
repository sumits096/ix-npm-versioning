import { Method } from 'axios';
import { ApiRequestModel } from '../models/client-request-model';
export declare function createApiRequest(url: string, httpMethod: Method, payload?: string, optionsModel?: any, isFormData?: boolean): ApiRequestModel;
export declare function createQueryParameter(queryParameter: any): string;
export declare function buildURL(url: string, queryParameter: string): string;
export declare function detectQueryString(url: string): boolean;
