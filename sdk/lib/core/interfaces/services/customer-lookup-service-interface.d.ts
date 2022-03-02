import { CustomerLookupResponse } from '../../entity';
export interface CustomerLookupServiceInterface {
    getLookupByIssueId(issueId: string): Promise<CustomerLookupResponse>;
    getLookupById(customerUserId: string): Promise<CustomerLookupResponse>;
    getLookupByEmail(customerUserEmail: string): Promise<CustomerLookupResponse>;
    getLookupByExternalId(externalId: string): Promise<CustomerLookupResponse>;
}
