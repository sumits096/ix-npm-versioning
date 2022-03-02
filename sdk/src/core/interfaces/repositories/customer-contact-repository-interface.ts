import { CustomerContactResponse, CustomerContactRequest, ExistsResponse, SSOResponse } from '../../entity';

/**
 * Defines methods defination for customer contact to request boomtown api's.
 */
export interface CustomerContactRepositoryInterface {
    /**
     * Returns whether a Customer contact with the email address exists or not.
     * @param email for Email Address to check
     */
    isExists(email: string): Promise<ExistsResponse>;

    /**
     * Returns a paginated collection of customer contact objects related to a Customer object.
     * @param customerId for customer id
     * @param userId for Optional userId to filter the results with
     */
    getByCustomerId(customerId: string, userId?: string): Promise<CustomerContactResponse>;

    /**
     * Returns collection of customers contact
     * @param externalId for customer contact's external ID
     */
    getByExternalId(externalId: string): Promise<CustomerContactResponse>;

    /**
     * Creates/updates a Customer Contact
     * @param customerContactRequest for CustomerContactRequest object
     */
    post(customerContactRequest: CustomerContactRequest): Promise<CustomerContactResponse>;

    /**
     * Authenticates a customer contact
     * @param contactId for customer contact id
     * @param endpoint to authenticate (defaults to admin/v1)
     */
    authToken(contactId: string, endpoint?: string): Promise<SSOResponse>;

    /**
     * Delete customer contact
     * @param customerId for customer id
     * @param customerContactRequest for CustomerContactRequest object
     */
    delete(customerId: string, customerContactRequest: CustomerContactRequest): Promise<CustomerContactResponse>;
}
