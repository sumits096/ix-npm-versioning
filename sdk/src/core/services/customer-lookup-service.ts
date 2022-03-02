import { Service } from 'typedi';
import { CustomerLookupResponse } from '../entity';
import { CustomerLookupRepositoryInterface } from '../interfaces/repositories';
import { CustomerLookupServiceInterface } from '../interfaces/services';

/**
 * Customer Lookup service
 * @description Provide methods for customer lookup endpoints.
 * 
 * @BoomtownSDK
 */
@Service()
export class CustomerLookupService implements CustomerLookupServiceInterface {
    constructor(protected readonly customerLookupRepository: CustomerLookupRepositoryInterface) {
    }

    /**
     * Returns customer details.
     * @param issueId for issue id
     * @returns 
     */
    getLookupByIssueId(issueId: string): Promise<CustomerLookupResponse> {
        return this.customerLookupRepository.getLookupByIssueId(issueId);
    }

    /**
     * Returns customer details.
     * @param customerUserId for customer user id
     * @returns 
     */
    getLookupById(customerUserId: string): Promise<CustomerLookupResponse> {
        return this.customerLookupRepository.getLookupById(customerUserId);
    }

    /**
     * Returns customer details.
     * @param customerUserEmail for customer email id
     * @returns 
     */
    getLookupByEmail(customerUserEmail: string): Promise<CustomerLookupResponse> {
        return this.customerLookupRepository.getLookupByEmail(customerUserEmail);
    }

    /**
     * Returns customer details.
     * @param externalId for customer external id
     * @returns 
     */
    getLookupByExternalId(externalId: string): Promise<CustomerLookupResponse> {
        return this.customerLookupRepository.getLookupByExternalId(externalId);
    }
}
