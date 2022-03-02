import { CustomerLookupResponse } from '../../core/entity';
import { CustomerLookupRepositoryInterface } from '../../core/interfaces/repositories';
import { BoomtownClient } from '../client/boomtown-client';
export declare class CustomerLookupRepository implements CustomerLookupRepositoryInterface {
    protected readonly boomtownClient: BoomtownClient;
    private queryParamModel;
    constructor(boomtownClient: BoomtownClient);
    getLookupByIssueId(issueId: string): Promise<CustomerLookupResponse>;
    getLookupById(customerUserId: string): Promise<CustomerLookupResponse>;
    getLookupByEmail(customerUserEmail: string): Promise<CustomerLookupResponse>;
    getLookupByExternalId(externalId: string): Promise<CustomerLookupResponse>;
}
