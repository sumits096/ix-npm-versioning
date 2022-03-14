import { BaseResponse, CustomerLocationOptions, CustomerLocationResponse, CustomerLocationCreateRequest, HashMapResponse, CustomerContactResponse } from '../../core/entity';
import { CustomerLocationServiceInterface } from '../../core/interfaces/services';
export declare class CustomerLocation {
    private readonly customerLocationService;
    constructor(customerLocationService: CustomerLocationServiceInterface);
    getByCustomerId(id: string, customerLocationOptions?: CustomerLocationOptions): Promise<CustomerLocationResponse>;
    post(customerLocationCreateRequest: CustomerLocationCreateRequest): Promise<CustomerLocationResponse>;
    delete(id: string): Promise<BaseResponse>;
    getByExternalId(id: string): Promise<CustomerLocationResponse>;
    getContactByCustomerId(customerId: string, customerLocationId: string): Promise<CustomerContactResponse>;
    getMetaStatus(): Promise<HashMapResponse>;
}
