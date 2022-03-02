import { BaseResponse, CustomerLocationOptions, CustomerLocationResponse, CustomerLocationCreateRequest, HashMapResponse, CustomerContactResponse } from '../entity';
import { CustomerLocationRepositoryInterface } from '../interfaces/repositories/customer-location-repository-interface';
import { CustomerLocationServiceInterface } from '../interfaces/services/customer-location-service-interface';
export declare class CustomerLocationService implements CustomerLocationServiceInterface {
    protected readonly customerLocationRepository: CustomerLocationRepositoryInterface;
    constructor(customerLocationRepository: CustomerLocationRepositoryInterface);
    getByCustomerId(id: string, customerLocationOptions?: CustomerLocationOptions): Promise<CustomerLocationResponse>;
    post(customerLocationCreateRequest: CustomerLocationCreateRequest): Promise<CustomerLocationResponse>;
    delete(id: string): Promise<BaseResponse>;
    getByExternalId(id: string): Promise<CustomerLocationResponse>;
    getContactByCustomerId(customerId: string, customerLocationId: string): Promise<CustomerContactResponse>;
    getMetaStatus(): Promise<HashMapResponse>;
}
