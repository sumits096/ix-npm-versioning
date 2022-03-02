import { CustomerContactModel, CustomerLocationModel, CustomerModel } from '.';

export interface CustomerCreateRequestModel {
    customer: CustomerModel;
    customer_user: CustomerContactModel;
    customer_location: CustomerLocationModel;
    matchExternalId: boolean;
}
