import { Service } from 'typedi';
import { BoomtownClient } from '../client/boomtown-client';
import { createApiRequest } from '../../core/helpers';
import { apiPaths } from '../../configs/api-paths';
import { CaseMetaMap, ErrorMap } from '../mapper';
import { EnumerationItemResponse } from '../../core/entity';
import { CaseMetaRepositoryInterface } from '../../core/interfaces/repositories';

/**
 * Case meta repository
 * @description Provide methods for Case meta endpoints.
 *
 * @BoomtownSDK
 */
@Service()
export class CaseMataRepository implements CaseMetaRepositoryInterface {
    constructor(protected readonly boomtownClient: BoomtownClient) {}

    /**
     * Return dictionary mapping Status keys to their labels.
     * @returns
     */
    async getStatuses(): Promise<EnumerationItemResponse> {
        try {
            const apiRequest = createApiRequest(apiPaths.getCaseMetaStatusApi, 'GET');
            const result = await this.boomtownClient.request(apiRequest);

            return CaseMetaMap.mapper(result.data);
        } catch (error: any) {
            throw error.response && error.response.data ? ErrorMap.error(error.response.data) : error;
        }
    }

    /**
     * Return dictionary mapping Jobs keys to their labels.
     * @returns
     */
    async getJobs(): Promise<EnumerationItemResponse> {
        try {
            const apiRequest = createApiRequest(apiPaths.getCaseMetaJobsApi, 'GET');
            const result = await this.boomtownClient.request(apiRequest);

            return CaseMetaMap.mapper(result.data);
        } catch (error: any) {
            throw error.response && error.response.data ? ErrorMap.error(error.response.data) : error;
        }
    }

    /**
     * Return dictionary mapping Categories keys to their labels.
     * @returns
     */
    async getCategories(): Promise<EnumerationItemResponse> {
        try {
            const apiRequest = createApiRequest(apiPaths.getCaseMetaCategoriesApi, 'GET');
            const result = await this.boomtownClient.request(apiRequest);

            return CaseMetaMap.mapper(result.data);
        } catch (error: any) {
            throw error.response && error.response.data ? ErrorMap.error(error.response.data) : error;
        }
    }

    /**
     * Return dictionary mapping Categories New keys to their labels.
     * @returns
     */
    async getCategoriesNew(): Promise<EnumerationItemResponse> {
        try {
            const apiRequest = createApiRequest(apiPaths.getCaseMetaCategoriesNewApi, 'GET');
            const result = await this.boomtownClient.request(apiRequest);

            return CaseMetaMap.mapper(result.data);
        } catch (error: any) {
            throw error.response && error.response.data ? ErrorMap.error(error.response.data) : error;
        }
    }

    /**
     * Return dictionary mapping tags keys to their labels.
     * @returns
     */
    async getTags(): Promise<EnumerationItemResponse> {
        try {
            const apiRequest = createApiRequest(apiPaths.getCaseMetaTagsApi, 'GET');
            const result = await this.boomtownClient.request(apiRequest);

            return CaseMetaMap.mapper(result.data);
        } catch (error: any) {
            throw error.response && error.response.data ? ErrorMap.error(error.response.data) : error;
        }
    }

    /**
     * Return dictionary mapping types keys to their labels.
     * @returns
     */
    async getTypes(): Promise<EnumerationItemResponse> {
        try {
            const apiRequest = createApiRequest(apiPaths.getCaseMetaTypesApi, 'GET');
            const result = await this.boomtownClient.request(apiRequest);

            return CaseMetaMap.mapper(result.data);
        } catch (error: any) {
            throw error.response && error.response.data ? ErrorMap.error(error.response.data) : error;
        }
    }

    /**
     * Return dictionary mapping file tags keys to their labels.
     * @returns
     */
    async getFileTags(): Promise<EnumerationItemResponse> {
        try {
            const apiRequest = createApiRequest(apiPaths.getCaseMetaFileTagsApi, 'GET');
            const result = await this.boomtownClient.request(apiRequest);

            return CaseMetaMap.mapper(result.data);
        } catch (error: any) {
            throw error.response && error.response.data ? ErrorMap.error(error.response.data) : error;
        }
    }

    /**
     * Return dictionary mapping resolutions keys to their labels.
     * @returns
     */
    async getResolutions(): Promise<EnumerationItemResponse> {
        try {
            const apiRequest = createApiRequest(apiPaths.getCaseMetaResolutionsApi, 'GET');
            const result = await this.boomtownClient.request(apiRequest);

            return CaseMetaMap.mapper(result.data);
        } catch (error: any) {
            throw error.response && error.response.data ? ErrorMap.error(error.response.data) : error;
        }
    }
}
