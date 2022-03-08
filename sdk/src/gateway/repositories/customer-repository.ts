import { Inject, Service } from 'typedi';
import { CustomerMap, ErrorMap, ResponseMap } from '../mapper';
import { BoomtownClient } from '../client/boomtown-client';
import { createApiRequest } from '../../core/helpers';
import { apiPaths } from '../../configs/api-paths';
import {
    BaseResponse,
    CustomerCreateResponse,
    CustomerResponse,
    CustomerCreateRequest,
    ListOptions,
    SmsInviteData,
    SmsInviteResponse,
} from '../../core/entity';
import { CustomerRepositoryInterface } from '../../core/interfaces/repositories';

/**
 * Customer repository
 * @description Provide methods for customer endpoints.
 *
 * @BoomtownSDK
 */
@Service()
export class CustomerRepository implements CustomerRepositoryInterface {
    constructor(@Inject('BoomtownClient') protected readonly boomtownClient: BoomtownClient) {}

    /**
     * Returns a collection of customers
     * @param listOptionsModel for the pagination of collection.
     * @returns
     */
    async get(listOptions?: ListOptions): Promise<CustomerResponse> {
        try {
            const apiRequest = createApiRequest(apiPaths.getCustomerApi, 'GET', '', listOptions);
            const result = await this.boomtownClient.request(apiRequest);

            return CustomerMap.mapper(result.data);
        } catch (error: any) {
            throw error.response && error.response.data ? ErrorMap.error(error.response.data) : error;
        }
    }

    /**
     * Returns a object of customer
     * @param id customer id.
     * @returns
     */
    async getById(id: string): Promise<CustomerResponse> {
        try {
            const apiRequest = createApiRequest(apiPaths.getCustomerByIdApi(id), 'GET');
            const result = await this.boomtownClient.request(apiRequest);

            return CustomerMap.mapper(result.data);
        } catch (error: any) {
            throw error.response && error.response.data ? ErrorMap.error(error.response.data) : error;
        }
    }

    /**
     * Create or update customer records.
     * @param customerCreateRequest for customer payload.
     * @returns
     */
    async post(customerCreateRequest: CustomerCreateRequest): Promise<CustomerCreateResponse> {
        try {
            const payload = JSON.stringify(CustomerMap.toBTRequestModel(customerCreateRequest));
            const apiRequest = createApiRequest(apiPaths.createUpdateCustomerApi, 'POST', payload);
            const result = await this.boomtownClient.request(apiRequest);

            return CustomerMap.customerCreateResponse(result.data);
        } catch (error: any) {
            throw error.response && error.response.data ? ErrorMap.error(error.response.data) : error;
        }
    }

    /**
     * Delete record from customer collection
     * @param id for customer id.
     * @returns
     */
    async delete(id: string): Promise<BaseResponse> {
        try {
            const apiRequest = createApiRequest(apiPaths.deleteCustomerApi(id), 'POST');
            const result = await this.boomtownClient.request(apiRequest);

            return ResponseMap.response(result.data);
        } catch (error: any) {
            throw error.response && error.response.data ? ErrorMap.error(error.response.data) : error;
        }
    }

    /**
     * Sms invite for existing/new customer
     * @param smsInviteData for sms invite details
     * @returns 
     */
    async smsInvite(smsInviteData: SmsInviteData): Promise<SmsInviteResponse> {
        try {
            const payload = CustomerMap.toBTSmsInviteDataModel(smsInviteData);
            const apiRequest = createApiRequest(apiPaths.customerSmsInviteApi, 'POST', JSON.stringify(payload));
            const result = await this.boomtownClient.request(apiRequest);

            return CustomerMap.fromBTSmsInviteResponse(result.data);
        } catch (error: any) {
            throw error.response && error.response.data ? ErrorMap.error(error.response.data) : error;
        }
    }
}
