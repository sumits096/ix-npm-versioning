import { CustomerContactModel, CustomerLocationModel, CustomerModel } from '.';

export interface CustomerTupleModel {
    customer: CustomerModel;
    customer_user: CustomerContactModel;
    customer_location: CustomerLocationModel;
}
