import { CustomerContactResponse, CustomerContactRequest, ExistsResponse, SSOResponse } from '../entity';
import { CustomerContactRepositoryInterface } from '../interfaces/repositories';
import { CustomerContactServiceInterface } from '../interfaces/services';
export declare class CustomerContactService implements CustomerContactServiceInterface {
    protected readonly customerContactRepository: CustomerContactRepositoryInterface;
    constructor(customerContactRepository: CustomerContactRepositoryInterface);
    isExists(email: string): Promise<ExistsResponse>;
    getByCustomerId(customerId: string, userId?: string): Promise<CustomerContactResponse>;
    getByExternalId(externalId: string): Promise<CustomerContactResponse>;
    post(customerContactRequest: CustomerContactRequest): Promise<CustomerContactResponse>;
    authToken(contactId: string, endpoint?: string): Promise<SSOResponse>;
    delete(customerId: string, customerContactCRequest: CustomerContactRequest): Promise<CustomerContactResponse>;
}
