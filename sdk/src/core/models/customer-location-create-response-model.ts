import { BaseResponseModel, CustomerTupleModel } from '.';

export interface CustomerLocationCreateResponseModel extends BaseResponseModel {
    results: CustomerTupleModel;
}
