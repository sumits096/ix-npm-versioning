import { BaseResponseModel, CustomerContactModel } from '.';
export interface CustomerContactResponseModel extends BaseResponseModel {
    results: CustomerContactModel[];
}
