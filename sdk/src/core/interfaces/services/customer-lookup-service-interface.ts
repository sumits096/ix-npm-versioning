import { CustomerLookupResponse } from '../../entity';

/**
 * Defines methods definition for customer lookup to interact with customer lookup repository.
 * 
 * @interface CustomerLookupServiceInterface
 */
export interface CustomerLookupServiceInterface {
  /**
   * Returns customer details.
   * @param issueId for issue id
   */
  getLookupByIssueId(issueId: string): Promise<CustomerLookupResponse>

  /**
   * Returns customer details.
   * @param customerUserId for customer user id
   */
  getLookupById(customerUserId: string): Promise<CustomerLookupResponse>

  /**
   * Returns customer details.
   * @param customerUserEmail for customer email id
   */
  getLookupByEmail(customerUserEmail: string): Promise<CustomerLookupResponse>

  /**
   * Returns customer details.
   * @param externalId for customer externalId
   */
  getLookupByExternalId(externalId: string): Promise<CustomerLookupResponse>
}
