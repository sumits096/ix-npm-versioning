import { BaseResponse, CustomerContactResponse, CustomerLocationOptions, CustomerLocationResponse, HashMapResponse } from '../../entity';
export interface CustomerLocationRepositoryInterface {
    getByCustomerId(id?: string, customerLocationOptions?: CustomerLocationOptions): Promise<BaseResponse>;
    post(model: any): Promise<BaseResponse>;
    delete(id: string): Promise<BaseResponse>;
    getByExternalId(id?: string): Promise<CustomerLocationResponse>;
    getContactByCustomerId(customerId: string, customerLocationId: string): Promise<CustomerContactResponse>;
    getMetaStatus(): Promise<HashMapResponse>;
}
