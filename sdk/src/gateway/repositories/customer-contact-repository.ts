import { Service } from 'typedi';
import { BoomtownClient } from '../client/boomtown-client';
import { CustomerContactResponse, CustomerContactRequest, ExistsResponse, SSOResponse } from '../../core/entity';
import { CustomerContactRepositoryInterface } from '../../core/interfaces/repositories';
import { createApiRequest } from '../../core/helpers';
import { apiPaths } from '../../configs/api-paths';
import { QueryParamModel } from '../../core/models';
import { CustomerContactMap, ErrorMap } from '../mapper';

/**
 * Customer contact repository
 * @description Provide methods for customer contact endpoints.
 *
 * @BoomtownSDK
 */
@Service()
export class CustomerContactRepository implements CustomerContactRepositoryInterface {
    private queryParamModel: QueryParamModel = {} as QueryParamModel;

    constructor(protected readonly boomtownClient: BoomtownClient) {}

    /**
     * Returns whether a Customer contact with the email address exists or not.
     * @param email for Email Address to check
     * @returns
     */
    async isExists(email: string): Promise<ExistsResponse> {
        try {
            const apiRequest = createApiRequest(apiPaths.customerContactCheck(email), 'GET');
            const results = await this.boomtownClient.request(apiRequest);

            return CustomerContactMap.fromBTExistsResponse(results.data);
        } catch (error: any) {
            throw error.response && error.response.data ? ErrorMap.error(error.response.data) : error;
        }
    }

    /**
     * Returns a paginated collection of customer contact objects related to a Customer object.
     * @param customerId for customer id.
     * @param userId for Optional userId to filter the results with.
     * @returns
     */
    async getByCustomerId(customerId: string, userId?: string): Promise<CustomerContactResponse> {
        try {
            this.queryParamModel.user_id = userId;
            const apiRequest = createApiRequest(
                apiPaths.customerContactByCustomerId(customerId),
                'GET',
                '',
                this.queryParamModel,
            );
            const results = await this.boomtownClient.request(apiRequest);

            return CustomerContactMap.fromBTCustomerContactResponse(results.data);
        } catch (error: any) {
            throw error.response && error.response.data ? ErrorMap.error(error.response.data) : error;
        }
    }

    /**
     * Returns collection of customers contact.
     * @param externalId for customer contact's external ID.
     * @returns
     */
    async getByExternalId(externalId: string): Promise<CustomerContactResponse> {
        try {
            this.queryParamModel.external_id = externalId ? externalId : '';
            const apiRequest = createApiRequest(apiPaths.customerContactByExternalId, 'GET', '', this.queryParamModel);
            const results = await this.boomtownClient.request(apiRequest);

            return CustomerContactMap.fromBTCustomerContactResponse(results.data);
        } catch (error: any) {
            throw error.response && error.response.data ? ErrorMap.error(error.response.data) : error;
        }
    }

    /**
     * Creates/updates a Customer contact object
     * @param customerContactRequest for CustomerContactRequest object
     * @returns
     */
    async post(customerContactRequest: CustomerContactRequest): Promise<CustomerContactResponse> {
        try {
            const payload = JSON.stringify(CustomerContactMap.toBTCustomerContactRequest(customerContactRequest));
            const apiRequest = createApiRequest(apiPaths.createUpdateCustomerContact, 'POST', payload);
            const results = await this.boomtownClient.request(apiRequest);

            return CustomerContactMap.fromBTCustomerContactResponse(results.data);
        } catch (error: any) {
            throw error.response && error.response.data ? ErrorMap.error(error.response.data) : error;
        }
    }

    /**
     * Authenticates a customer contact
     * @param contactId for customer contact id
     * @param endpoint to authenticate (defaults to admin/v1)
     * @returns
     */
    async authToken(contactId: string, endpoint: string = 'admin/v1'): Promise<SSOResponse> {
        try {
            this.queryParamModel.endpoint = endpoint;
            const apiRequest = createApiRequest(
                apiPaths.customerContactSSO(contactId),
                'POST',
                '',
                this.queryParamModel,
            );
            const results = await this.boomtownClient.request(apiRequest);

            return CustomerContactMap.fromBTCustomerContactResponse(results.data);
        } catch (error: any) {
            throw error.response && error.response.data ? ErrorMap.error(error.response.data) : error;
        }
    }

    /**
     * Delete customer contact
     * @param customerId  for customer id
     * @param customerContactRequest for CustomerContactRequest object
     * @returns
     */
    async delete(customerId: string, customerContactRequest: CustomerContactRequest): Promise<CustomerContactResponse> {
        try {
            const payload = JSON.stringify(CustomerContactMap.toBTCustomerContactRequest(customerContactRequest));
            const apiRequest = createApiRequest(apiPaths.deleteCustomerContact(customerId), 'POST', payload);
            const results = await this.boomtownClient.request(apiRequest);

            return CustomerContactMap.fromBTCustomerContactResponse(results.data);
        } catch (error: any) {
            throw error.response && error.response.data ? ErrorMap.error(error.response.data) : error;
        }
    }
}
