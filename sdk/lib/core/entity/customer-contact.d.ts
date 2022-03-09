export interface CustomerContact {
    id?: string;
    customerId: string;
    customerLocationId?: string;
    firstName: string;
    lastName: string;
    fullName?: string;
    email: string;
    smsNumber?: string;
    externalId?: string;
    lang?: string;
    status?: string;
}
