import { BaseResponseModel, CustomerModel } from '.';

export interface CustomerResponseModel extends BaseResponseModel {
    results: CustomerModel[];
}
