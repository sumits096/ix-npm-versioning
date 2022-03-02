import 'automapper-ts';
import { Customer, CustomerCreateRequest, CustomerCreateResponse, CustomerResponse, SmsInviteData, SmsInviteResponse } from '../../core/entity';
import { CustomerCreateRequestModel, CustomerCreateResponseModel, CustomerModel, CustomerResponseModel, SmsInviteDataModel, SmsInviteResponseModel } from '../../core/models';
export declare class CustomerMap {
    static fromBTCustomer(model: CustomerModel): Customer;
    static toBTRequestModel(model: CustomerCreateRequest): CustomerCreateRequestModel;
    static toBTCustomer(model: Customer): CustomerModel;
    static mapper(responseModel: CustomerResponseModel): CustomerResponse;
    static customerCreateResponse(responseModel: CustomerCreateResponseModel): CustomerCreateResponse;
    static toBTSmsInviteDataModel(model: SmsInviteData): SmsInviteDataModel;
    static fromBTSmsInviteResponse(model: SmsInviteResponseModel): SmsInviteResponse;
}
