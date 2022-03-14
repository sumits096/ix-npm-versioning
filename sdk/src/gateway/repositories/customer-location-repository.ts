import { BoomtownClient } from '../client/boomtown-client';
import { createApiRequest } from '../../core/helpers';
import { apiPaths } from '../../configs/api-paths';
import { BaseResponse, CustomerLocationOptions, CustomerLocationResponse, CustomerLocationCreateRequest, HashMapResponse, CustomerContactResponse } from '../../core/entity';
import { CustomerLocationMap } from '../mapper/customer-location-map';
import { CustomerContactMap, CustomerMetaMap, ErrorMap, ResponseMap } from '../mapper';
import { CustomerLocationOptionsModel } from '../../core/models';
import { CustomerLocationRepositoryInterface } from '../../core/interfaces/repositories';
import { Inject, Injectable } from '@nestjs/common';

/**
 * Customer location repository
 * @description Provide methods for customer location endpoints.
 *
 * @BoomtownSDK
 */
@Injectable()
export class CustomerLocationRepository implements CustomerLocationRepositoryInterface {
    private customerLocationOptionsModel: CustomerLocationOptionsModel = {} as CustomerLocationOptionsModel;

    constructor(@Inject('BoomtownClient') protected readonly boomtownClient: BoomtownClient) {}

    /**
     * Returns a collection of customers location
     * @param id customer location id.
     * @param customerLocationOptions customer location query parameter
     * @returns
     */
    async getByCustomerId(id: string, customerLocationOptions?: CustomerLocationOptions): Promise<CustomerLocationResponse> {
        try {
            this.customerLocationOptionsModel.customer_location_id = customerLocationOptions?.customerLocationId;
            const apiRequest = createApiRequest(apiPaths.getCustomerLocationByIdApi(id), 'GET', '', this.customerLocationOptionsModel);
            const result = await this.boomtownClient.request(apiRequest);

            return CustomerLocationMap.responseCustomerLocationMapper(result.data);
        } catch (error: any) {
            throw error.response && error.response.data ? ErrorMap.error(error.response.data) : error;
        }
    }

    /**
     * Create or update customer location records.
     * @param customerLocationCreateRequest for customer location payload.
     */
    async post(customerLocationCreateRequest: CustomerLocationCreateRequest): Promise<CustomerLocationResponse> {
        try {
            const payload = JSON.stringify(CustomerLocationMap.toBTCreateRequestModel(customerLocationCreateRequest));
            const apiRequest = createApiRequest(apiPaths.createUpdateCustomerLocationApi, 'POST', payload);
            const result = await this.boomtownClient.request(apiRequest);

            return CustomerLocationMap.responseCustomerLocationMapper(result.data);
        } catch (error: any) {
            throw error.response && error.response.data ? ErrorMap.error(error.response.data) : error;
        }
    }

    /**
     * Delete record from customer location collection
     * @param id for customer location id.
     */
    async delete(id: string): Promise<BaseResponse> {
        try {
            const apiRequest = createApiRequest(apiPaths.deleteCustomerLocationApi(id), 'POST');
            const result = await this.boomtownClient.request(apiRequest);

            return ResponseMap.response(result.data);
        } catch (error: any) {
            throw error.response && error.response.data ? ErrorMap.error(error.response.data) : error;
        }
    }

    /**
     * Returns a collection of customer location
     * @param id for external id.
     * @returns
     */
    async getByExternalId(id: string): Promise<CustomerLocationResponse> {
        try {
            this.customerLocationOptionsModel.external_id = id;
            const apiRequest = createApiRequest(apiPaths.getCustomerLocationByExternalIdApi, 'GET', '', this.customerLocationOptionsModel);
            const result = await this.boomtownClient.request(apiRequest);

            return CustomerLocationMap.responseCustomerLocationMapper(result.data);
        } catch (error: any) {
            throw error.response && error.response.data ? ErrorMap.error(error.response.data) : error;
        }
    }

    /**
     * Returns a paginated collection of customer contact objects related to a Customer location object.
     * @param customerId for customer id.
     * @param customerLocationId for Optional customer location id to filter the results with.
     * @returns
     */
    async getContactByCustomerId(customerId: string, customerLocationId: string): Promise<CustomerContactResponse> {
        try {
            this.customerLocationOptionsModel.customer_location_id = customerLocationId;
            const apiRequest = createApiRequest(apiPaths.getLocationContactByCustomerId(customerId), 'GET', '', this.customerLocationOptionsModel);
            const results = await this.boomtownClient.request(apiRequest);

            return CustomerContactMap.fromBTCustomerContactResponse(results.data);
        } catch (error: any) {
            throw error.response && error.response.data ? ErrorMap.error(error.response.data) : error;
        }
    }

    /**
     * Return dictionary mapping Status keys to their labels.
     * @returns
     */
    async getMetaStatus(): Promise<HashMapResponse> {
        try {
            const apiRequest = createApiRequest(apiPaths.getCustomerLocationMetaStatus, 'GET');
            const result = await this.boomtownClient.request(apiRequest);

            return CustomerMetaMap.mapper(result.data);
        } catch (error: any) {
            throw error.response && error.response.data ? ErrorMap.error(error.response.data) : error;
        }
    }
}
