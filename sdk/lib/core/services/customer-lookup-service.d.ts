import { CustomerLookupResponse } from '../entity';
import { CustomerLookupRepositoryInterface } from '../interfaces/repositories';
import { CustomerLookupServiceInterface } from '../interfaces/services';
export declare class CustomerLookupService implements CustomerLookupServiceInterface {
    protected readonly customerLookupRepository: CustomerLookupRepositoryInterface;
    constructor(customerLookupRepository: CustomerLookupRepositoryInterface);
    getLookupByIssueId(issueId: string): Promise<CustomerLookupResponse>;
    getLookupById(customerUserId: string): Promise<CustomerLookupResponse>;
    getLookupByEmail(customerUserEmail: string): Promise<CustomerLookupResponse>;
    getLookupByExternalId(externalId: string): Promise<CustomerLookupResponse>;
}
