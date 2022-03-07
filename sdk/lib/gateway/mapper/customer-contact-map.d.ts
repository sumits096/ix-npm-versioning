import { CustomerContact, CustomerContactResponse, CustomerContactRequest, ExistsResponse, SSOResponse } from '../../core/entity';
import { CustomerContactResponseModel, CustomerContactModel, CustomerContactRequestModel, ExistsResponseModel, SSOResponseModel } from '../../core/models';
export declare class CustomerContactMap {
    static fromBTCustomerContact(model: CustomerContactModel): CustomerContact;
    static toBTCustomerContact(model: CustomerContact): CustomerContactModel;
    static fromBTExistsResponse(model: ExistsResponseModel): ExistsResponse;
    static fromBTCustomerContactResponse(model: CustomerContactResponseModel): CustomerContactResponse;
    static toBTCustomerContactRequest(customerContactRequest: CustomerContactRequest): CustomerContactRequestModel;
    static fromBTCustomerContactSSOResponse(responseModel: SSOResponseModel): SSOResponse;
}
