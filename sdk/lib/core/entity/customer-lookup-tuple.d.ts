import { Customer, CustomerContact, CustomerLookupLocation } from '.';
export interface CustomerLookupTuple {
    customersId: string;
    customersUsersId: string;
    customersLocationsId: string;
    customer: Customer;
    customerContact: CustomerContact;
    customerLocation: CustomerLookupLocation;
}
