import { CustomerContactRequest, CustomerContactResponse, ExistsResponse, SSOResponse } from '../../core/entity';
import { CustomerContactServiceInterface } from '../../core/interfaces/services';
export declare class CustomerContact {
    private readonly customerContactService;
    constructor(customerContactService: CustomerContactServiceInterface);
    isExists(email: string): Promise<ExistsResponse>;
    getByCustomerId(customerId: string, userId?: string): Promise<CustomerContactResponse>;
    getByExternalId(externalId: string): Promise<CustomerContactResponse>;
    post(customerContactRequest: CustomerContactRequest): Promise<CustomerContactResponse>;
    authToken(contactId: string, endpoint?: string): Promise<SSOResponse>;
    delete(customerId: string, customerContactRequest: CustomerContactRequest): Promise<CustomerContactResponse>;
}
