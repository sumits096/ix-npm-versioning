import { BoomtownClient } from '../client/boomtown-client';
import { createApiRequest } from '../../core/helpers';
import { apiPaths } from '../../configs/api-paths';
import { CustomerMetaRepositoryInterface } from '../../core/interfaces/repositories';
import { CustomerMetaMap, ErrorMap, MetaCustomFormsMap } from '../mapper';
import { HashMapResponse, MetaCustomFormsResponse } from '../../core/entity';
import { QueryParamModel } from '../../core/models';
import { Inject, Injectable } from '@nestjs/common';

/**
 * Customer meta repository
 * @description Provide methods for customer meta endpoints.
 *
 * @BoomtownSDK
 */
@Injectable()
export class CustomerMetaRepository implements CustomerMetaRepositoryInterface {
    private queryParamModel: QueryParamModel = {} as QueryParamModel;

    constructor(@Inject('BoomtownClient') protected readonly boomtownClient: BoomtownClient) {}

    /**
     * Return dictionary mapping Status keys to their labels.
     * @returns
     */
    async getStatus(): Promise<HashMapResponse> {
        try {
            const apiRequest = createApiRequest(apiPaths.customerMetaStatus, 'GET');
            const result = await this.boomtownClient.request(apiRequest);

            return CustomerMetaMap.mapper(result.data);
        } catch (error: any) {
            throw error.response && error.response.data ? ErrorMap.error(error.response.data) : error;
        }
    }

    /**
     * Return dictionary mapping industries keys to their labels.
     * @returns
     */
    async getIndustries(): Promise<HashMapResponse> {
        try {
            const apiRequest = createApiRequest(apiPaths.customerMetaIndustries, 'GET');
            const result = await this.boomtownClient.request(apiRequest);

            return CustomerMetaMap.mapper(result.data);
        } catch (error: any) {
            throw error.response && error.response.data ? ErrorMap.error(error.response.data) : error;
        }
    }

    /**
     * Returns collection of custom form object
     * @param orgTeamId for organization team id
     * @returns
     */
    async customForms(orgTeamId: string): Promise<MetaCustomFormsResponse> {
        try {
            this.queryParamModel.org_team_id = orgTeamId;
            const apiRequest = createApiRequest(apiPaths.customerMetaCustomForms, 'GET', '', this.queryParamModel);
            const result = await this.boomtownClient.request(apiRequest);

            return MetaCustomFormsMap.mapper(result.data);
        } catch (error: any) {
            throw error.response && error.response.data ? ErrorMap.error(error.response.data) : error;
        }
    }
}
