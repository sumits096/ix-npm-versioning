import { Method } from 'axios';
import { ListOptionsModel } from '.';

export interface ApiRequestModel {
    url: string;
    method: Method;
    body?: string;
    queryParameter?: string;
    listOptions?: ListOptionsModel;
    formData: boolean;
}
