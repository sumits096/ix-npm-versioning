import { Inject, Injectable } from '@nestjs/common';
import { CustomerContactResponse, CustomerContactRequest, ExistsResponse, SSOResponse } from '../entity';
import { CustomerContactRepositoryInterface } from '../interfaces/repositories';
import { CustomerContactServiceInterface } from '../interfaces/services';

/**
 * Customer contact service
 * @description Provide methods for customer contact endpoints.
 *
 * @BoomtownSDK
 */
@Injectable()
export class CustomerContactService implements CustomerContactServiceInterface {
    constructor(@Inject('CustomerContactRepository') protected readonly customerContactRepository: CustomerContactRepositoryInterface) {}

    /**
     * Returns whether a Customer contact with the email address exists or not.
     * @param email for Email Address to check.
     * @returns
     */
    isExists(email: string): Promise<ExistsResponse> {
        return this.customerContactRepository.isExists(email);
    }

    /**
     * Returns a paginated collection of customer contact objects related to a Customer object.
     * @param customerId for customer id.
     * @param userId for Optional userId to filter the results with.
     * @returns
     */
    getByCustomerId(customerId: string, userId?: string): Promise<CustomerContactResponse> {
        return this.customerContactRepository.getByCustomerId(customerId, userId);
    }

    /**
     * Returns collection of customers contact.
     * @param externalId for customer contact's external ID.
     * @returns
     */
    getByExternalId(externalId: string): Promise<CustomerContactResponse> {
        return this.customerContactRepository.getByExternalId(externalId);
    }

    /**
     * Creates/updates a CustomerUser object
     * @param customerContactRequest for CustomerContactRequest object
     * @returns
     */
    post(customerContactRequest: CustomerContactRequest): Promise<CustomerContactResponse> {
        return this.customerContactRepository.post(customerContactRequest);
    }

    /**
     * Authenticates a customer contact
     * @param contactId for customer contact id
     * @param endpoint to authenticate (defaults to admin/v1)
     * @returns
     */
    authToken(contactId: string, endpoint?: string): Promise<SSOResponse> {
        return this.customerContactRepository.authToken(contactId, endpoint);
    }

    /**
     * Delete customer contact
     * @param customerId for customer id
     * @param customerContactCRequest for CustomerContactRequest object
     * @returns
     */
    delete(customerId: string, customerContactCRequest: CustomerContactRequest): Promise<CustomerContactResponse> {
        return this.customerContactRepository.delete(customerId, customerContactCRequest);
    }
}
