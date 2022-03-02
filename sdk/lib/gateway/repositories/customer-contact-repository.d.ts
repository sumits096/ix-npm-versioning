import { BoomtownClient } from '../client/boomtown-client';
import { CustomerContactResponse, CustomerContactRequest, ExistsResponse, SSOResponse } from '../../core/entity';
import { CustomerContactRepositoryInterface } from '../../core/interfaces/repositories';
export declare class CustomerContactRepository implements CustomerContactRepositoryInterface {
    protected readonly boomtownClient: BoomtownClient;
    private queryParamModel;
    constructor(boomtownClient: BoomtownClient);
    isExists(email: string): Promise<ExistsResponse>;
    getByCustomerId(customerId: string, userId?: string): Promise<CustomerContactResponse>;
    getByExternalId(externalId: string): Promise<CustomerContactResponse>;
    post(customerContactRequest: CustomerContactRequest): Promise<CustomerContactResponse>;
    authToken(contactId: string, endpoint?: string): Promise<SSOResponse>;
    delete(customerId: string, customerContactRequest: CustomerContactRequest): Promise<CustomerContactResponse>;
}
