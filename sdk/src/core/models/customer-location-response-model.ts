import { BaseResponseModel, CustomerLocationModel } from '.';

export interface CustomerLocationResponseModel extends BaseResponseModel {
    results: CustomerLocationModel[];
}
