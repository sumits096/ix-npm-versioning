import { Service } from 'typedi';
import { CustomerLookupResponse } from '../../core/entity';
import { CustomerLookupServiceInterface } from '../../core/interfaces/services';

@Service()
export class CustomerLookup {
    constructor(private readonly customerLookupService: CustomerLookupServiceInterface) {
    }
    /**
     * Returns customer details.
     * @param issueId for issue id
     * @returns 
     */
    async getLookupByIssueId(issueId: string): Promise<CustomerLookupResponse> {
        return this.customerLookupService.getLookupByIssueId(issueId);
    }

    /**
     * Returns customer details.
     * @param customerUserId for customer user id
     * @returns 
     */
    async getLookupById(customerUserId: string): Promise<CustomerLookupResponse> {
        return this.customerLookupService.getLookupById(customerUserId);
    }

    /**
     * Returns customer details.
     * @param customerUserEmail for customer email id
     * @returns 
     */
    async getLookupByEmail(customerUserEmail: string): Promise<CustomerLookupResponse> {
        return this.customerLookupService.getLookupByEmail(customerUserEmail);
    }

    /**
     * Returns customer details.
     * @param externalId for customer external id
     * @returns 
     */
    async getLookupByExternalId(externalId: string): Promise<CustomerLookupResponse> {
        return this.customerLookupService.getLookupByExternalId(externalId);
    }
}
