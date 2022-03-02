import { CustomerLookupResponse } from '../../core/entity';
import { CustomerLookupServiceInterface } from '../../core/interfaces/services';
export declare class CustomerLookup {
    private readonly customerLookupService;
    constructor(customerLookupService: CustomerLookupServiceInterface);
    getLookupByIssueId(issueId: string): Promise<CustomerLookupResponse>;
    getLookupById(customerUserId: string): Promise<CustomerLookupResponse>;
    getLookupByEmail(customerUserEmail: string): Promise<CustomerLookupResponse>;
    getLookupByExternalId(externalId: string): Promise<CustomerLookupResponse>;
}
