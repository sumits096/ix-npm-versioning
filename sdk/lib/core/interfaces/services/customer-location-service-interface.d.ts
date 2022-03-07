import { BaseResponse, CustomerLocationResponse, HashMapResponse } from '../../entity';
export interface CustomerLocationServiceInterface {
    getByCustomerId(id: string, options?: any): Promise<CustomerLocationResponse>;
    post(model: any): Promise<BaseResponse>;
    delete(id: string): Promise<BaseResponse>;
    getByExternalId(id: string): Promise<CustomerLocationResponse>;
    getMetaStatus(): Promise<HashMapResponse>;
}
