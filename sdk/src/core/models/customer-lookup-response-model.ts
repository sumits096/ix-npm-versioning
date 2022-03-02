import { BaseResponseModel, CustomerLookupTupleModel} from '.';

export interface CustomerLookupResponseModel extends BaseResponseModel {
    results: CustomerLookupTupleModel
}
