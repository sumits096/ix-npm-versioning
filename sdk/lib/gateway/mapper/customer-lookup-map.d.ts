import 'automapper-ts';
import { CustomerLookupResponse, CustomerLookupTuple } from '../../core/entity';
import { CustomerLookupResponseModel, CustomerLookupTupleModel } from '../../core/models';
export declare class CustomerLookupMap {
    static customerLookupResponse(responseModel: CustomerLookupResponseModel): CustomerLookupResponse;
    static fromBTCustomerLookupTuple(tuple: CustomerLookupTupleModel): CustomerLookupTuple;
}
