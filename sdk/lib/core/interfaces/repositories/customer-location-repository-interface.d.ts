import { BaseResponse, CustomerLocationOptions, CustomerLocationResponse, HashMapResponse } from '../../entity';
export interface CustomerLocationRepositoryInterface {
    getByCustomerId(id?: string, customerLocationOptions?: CustomerLocationOptions): Promise<BaseResponse>;
    post(model: any): Promise<BaseResponse>;
    delete(id: string): Promise<BaseResponse>;
    getByExternalId(id?: string): Promise<CustomerLocationResponse>;
    getMetaStatus(): Promise<HashMapResponse>;
}
