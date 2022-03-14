import { BaseResponse, CustomerContactResponse, CustomerLocationResponse, HashMapResponse } from '../../entity';
export interface CustomerLocationServiceInterface {
    getByCustomerId(id: string, options?: any): Promise<CustomerLocationResponse>;
    post(model: any): Promise<BaseResponse>;
    delete(id: string): Promise<BaseResponse>;
    getByExternalId(id: string): Promise<CustomerLocationResponse>;
    getContactByCustomerId(customerId: string, customerLocationId: string): Promise<CustomerContactResponse>;
    getMetaStatus(): Promise<HashMapResponse>;
}
