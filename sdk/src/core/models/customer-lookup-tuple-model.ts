import { CustomerModel, CustomerContactModel, CustomerLookupLocationModel } from '.';

export interface CustomerLookupTupleModel {
    customers_id: string,
    customers_users_id: string,
    customers_locations_id: string,
    customer: CustomerModel,
    customer_user: CustomerContactModel,
    customer_location: CustomerLookupLocationModel
}
