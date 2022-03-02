import { Service } from 'typedi';
import { apiPaths } from '../../configs/api-paths';
import { CustomerLookupResponse } from '../../core/entity';
import { createApiRequest } from '../../core/helpers';
import { CustomerLookupRepositoryInterface } from '../../core/interfaces/repositories';
import { QueryParamModel } from '../../core/models';
import { BoomtownClient } from '../client/boomtown-client';
import { CustomerLookupMap, ErrorMap } from '../mapper';

/**
 * Customer lookup repository
 * @description Provide methods for customer lookup endpoints.
 * 
 * @BoomtownSDK
 */
@Service()
export class CustomerLookupRepository implements CustomerLookupRepositoryInterface {
    private queryParamModel: QueryParamModel = {} as QueryParamModel;

    constructor(protected readonly boomtownClient: BoomtownClient) {
    }

    /**
     * Returns customer details.
     * @param issueId for issue id
     * @returns 
     */
    async getLookupByIssueId(issueId: string): Promise<CustomerLookupResponse> {
        try {
            this.queryParamModel.issueId = issueId;
            const apiRequest = createApiRequest(apiPaths.getLookupByIssueId, 'GET', '', this.queryParamModel);
            const result = await this.boomtownClient.request(apiRequest);
            
            return CustomerLookupMap.customerLookupResponse(result.data);
        } catch (error: any) {
            throw error.response && error.response.data ? ErrorMap.error(error.response.data) : error;
        }
    }

    /**
     * Returns customer details.
     * @param customerUserId for customer user id
     * @returns 
     */
    async getLookupById(customerUserId: string): Promise<CustomerLookupResponse> {
        try {
            this.queryParamModel.customerUserId = customerUserId;
            const apiRequest = createApiRequest(apiPaths.getLookupById, 'GET', '', this.queryParamModel);
            const result = await this.boomtownClient.request(apiRequest);

            return CustomerLookupMap.customerLookupResponse(result.data);
        } catch (error: any) {
            throw error.response && error.response.data ? ErrorMap.error(error.response.data) : error;
        }
    }

    /**
     * Returns customer details.
     * @param customerUserEmail for customer email id
     * @returns 
     */
    async getLookupByEmail(customerUserEmail: string): Promise<CustomerLookupResponse> {
        try {
            this.queryParamModel.customerUserEmail = customerUserEmail;
            const apiRequest = createApiRequest(apiPaths.getLookupByEmail, 'GET', '', this.queryParamModel);
            const result = await this.boomtownClient.request(apiRequest);

            return CustomerLookupMap.customerLookupResponse(result.data);
        } catch (error: any) {
            throw error.response && error.response.data ? ErrorMap.error(error.response.data) : error;
        }
    }

    /**
     * Returns customer details.
     * @param externalId for customer external id 
     * @returns 
     */
    async getLookupByExternalId(externalId: string): Promise<CustomerLookupResponse> {
        try {
            this.queryParamModel.external_id = externalId ? externalId : '';
            const apiRequest = createApiRequest(apiPaths.getLookupByExternalId, 'GET', '', this.queryParamModel);
            const result = await this.boomtownClient.request(apiRequest);

            return CustomerLookupMap.customerLookupResponse(result.data);
        } catch (error: any) {
            throw error.response && error.response.data ? ErrorMap.error(error.response.data) : error;
        }
    }
}
