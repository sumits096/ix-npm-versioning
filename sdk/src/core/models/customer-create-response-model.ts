import { BaseResponseModel, CustomerTupleModel } from '.';

export interface CustomerCreateResponseModel extends BaseResponseModel {
    results: CustomerTupleModel;
}
