import { Service } from 'typedi';
import { CustomerContactRequest, CustomerContactResponse, ExistsResponse, SSOResponse } from '../../core/entity';
import { CustomerContactServiceInterface } from '../../core/interfaces/services';

@Service()
export class CustomerContact {
    constructor(private readonly customerContactService: CustomerContactServiceInterface) {}

    /**
     * Returns whether a customer contact with the email address exists or not
     * @param email for Email Address to check
     * @returns
     */
    async isExists(email: string): Promise<ExistsResponse> {
        return this.customerContactService.isExists(email);
    }

    /**
     * Returns a paginated collection of customer contact objects related to a Customer object.
     * @param customerId for customer id
     * @param userId for Optional userId to filter the results with
     * @returns
     */
    async getByCustomerId(customerId: string, userId?: string): Promise<CustomerContactResponse> {
        return this.customerContactService.getByCustomerId(customerId, userId);
    }

    /**
     * Returns collection of customers contact
     * @param externalId for customer contact's external ID
     * @returns
     */
    async getByExternalId(externalId: string): Promise<CustomerContactResponse> {
        return this.customerContactService.getByExternalId(externalId);
    }

    /**
     * Creates/updates a Customer Contact
     * @param customerContactRequest for CustomerContactRequest object
     * @returns
     */
    async post(customerContactRequest: CustomerContactRequest): Promise<CustomerContactResponse> {
        return this.customerContactService.post(customerContactRequest);
    }

    /**
     * Authenticates a Customer contact, and returns the authtoken (and URL for web apps) for use with SSO.
     * @param contactId for customer contact id
     * @param endpoint to authenticate (defaults to admin/v1)
     * @returns
     */
    async authToken(contactId: string, endpoint?: string): Promise<SSOResponse> {
        return this.customerContactService.authToken(contactId, endpoint);
    }

    /**
     * Delete customer contact
     * @param customerId for customer id
     * @param customerContactRequest for CustomerContactRequest object
     * @returns
     */
    async delete(customerId: string, customerContactRequest: CustomerContactRequest): Promise<CustomerContactResponse> {
        return this.customerContactService.delete(customerId, customerContactRequest);
    }
}
