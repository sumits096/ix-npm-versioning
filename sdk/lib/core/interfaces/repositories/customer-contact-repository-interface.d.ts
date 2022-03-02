import { CustomerContactResponse, CustomerContactRequest, ExistsResponse, SSOResponse } from '../../entity';
export interface CustomerContactRepositoryInterface {
    isExists(email: string): Promise<ExistsResponse>;
    getByCustomerId(customerId: string, userId?: string): Promise<CustomerContactResponse>;
    getByExternalId(externalId: string): Promise<CustomerContactResponse>;
    post(customerContactRequest: CustomerContactRequest): Promise<CustomerContactResponse>;
    authToken(contactId: string, endpoint?: string): Promise<SSOResponse>;
    delete(customerId: string, customerContactRequest: CustomerContactRequest): Promise<CustomerContactResponse>;
}
