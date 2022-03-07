import { BoomtownClient } from '../client/boomtown-client';
import { BaseResponse, CustomerLocationOptions, CustomerLocationResponse, CustomerLocationCreateRequest, HashMapResponse } from '../../core/entity';
import { CustomerLocationRepositoryInterface } from '../../core/interfaces/repositories';
export declare class CustomerLocationRepository implements CustomerLocationRepositoryInterface {
    protected readonly boomtownClient: BoomtownClient;
    private customerLocationOptionsModel;
    constructor(boomtownClient: BoomtownClient);
    getByCustomerId(id: string, customerLocationOptions?: CustomerLocationOptions): Promise<CustomerLocationResponse>;
    post(customerLocationCreateRequest: CustomerLocationCreateRequest): Promise<CustomerLocationResponse>;
    delete(id: string): Promise<BaseResponse>;
    getByExternalId(id: string): Promise<CustomerLocationResponse>;
    getMetaStatus(): Promise<HashMapResponse>;
}
