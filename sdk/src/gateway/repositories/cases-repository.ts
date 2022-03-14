import { CasesMap, ErrorMap, ResponseMap } from '../mapper';
import { BoomtownClient } from '../client/boomtown-client';
import { createApiRequest } from '../../core/helpers';
import { apiPaths } from '../../configs/api-paths';
import { CasesResponse, CasesCreateRequest, CasesListOptions, CaseDeEscalateOptions, CaseEscalateOptions, BaseResponse, CaseStatusHistoryResponse, CaseChatHistoryResponse, CasesCreateResponse } from '../../core/entity';
import { CasesRepositoryInterface } from '../../core/interfaces/repositories';
import { CaseScheduleOptionsModel } from '../../core/models';
import { Inject, Injectable } from '@nestjs/common';

/**
 * Cases repository
 * @description Provide methods for cases endpoints.
 *
 * @BoomtownSDK
 */
@Injectable()
export class CasesRepository implements CasesRepositoryInterface {
    constructor(@Inject('BoomtownClient') protected readonly boomtownClient: BoomtownClient) {}

    /**
     * Returns a collection of cases
     * @param listOptionsModel for the pagination of collection.
     * @returns
     */
    async get(listOptions: CasesListOptions): Promise<CasesResponse> {
        try {
            const btListOptions = CasesMap.toBTCasesOptionsModel(listOptions);
            const apiRequest = createApiRequest(apiPaths.getCasesApi, 'GET', '', btListOptions);
            const result = await this.boomtownClient.request(apiRequest);

            return CasesMap.casesResponse(result.data);
        } catch (error: any) {
            throw error.response && error.response.data ? ErrorMap.error(error.response.data) : error;
        }
    }

    /**
     * Returns a object of cases
     * @param id cases id.
     * @returns
     */
    async getById(id: string): Promise<CasesResponse> {
        try {
            const apiRequest = createApiRequest(apiPaths.getCasesByIdApi(id), 'GET');
            const result = await this.boomtownClient.request(apiRequest);

            return CasesMap.casesResponse(result.data);
        } catch (error: any) {
            throw error.response && error.response.data ? ErrorMap.error(error.response.data) : error;
        }
    }

    /**
     * Create or update cases records.
     * @param casesCreateRequest for cases payload.
     * @returns
     */
    async post(casesCreateRequest: CasesCreateRequest): Promise<CasesCreateResponse> {
        try {
            const payload = JSON.stringify(CasesMap.toBTRequestModel(casesCreateRequest));
            const apiRequest = createApiRequest(apiPaths.createUpdateCasesApi, 'POST', payload);
            const result = await this.boomtownClient.request(apiRequest);

            return CasesMap.casesCreateResponse(result.data);
        } catch (error: any) {
            throw error.response && error.response.data ? ErrorMap.error(error.response.data) : error;
        }
    }

    /**
     * Retrieves a chat history for a closed cases with case id
     * @param caseId for the CaseId
     * @param scheduledTime for schedule time
     * @returns
     */
    async schedule(caseId: string, scheduledTime: string): Promise<BaseResponse> {
        try {
            const model: CaseScheduleOptionsModel = {} as CaseScheduleOptionsModel;
            model.scheduled_time = scheduledTime;
            const apiRequest = createApiRequest(apiPaths.caseScheduleByIdApi(caseId), 'POST', '', model);
            const result = await this.boomtownClient.request(apiRequest);

            return ResponseMap.response(result.data);
        } catch (error: any) {
            throw error.response && error.response.data ? ErrorMap.error(error.response.data) : error;
        }
    }

    /**
     * Retrieves a chat history for a closed cases with case id
     * @param caseId for the CaseId
     * @returns
     */
    async cancelSchedule(caseId: string): Promise<BaseResponse> {
        try {
            const apiRequest = createApiRequest(apiPaths.caseCancelScheduleByIdApi(caseId), 'POST');
            const result = await this.boomtownClient.request(apiRequest);

            return ResponseMap.response(result.data);
        } catch (error: any) {
            throw error.response && error.response.data ? ErrorMap.error(error.response.data) : error;
        }
    }

    /**
     * Retrieves a chat history for a closed cases with case id
     * @param caseId for the CaseId
     * @returns
     */
    async resolve(caseId: string): Promise<BaseResponse> {
        try {
            const apiRequest = createApiRequest(apiPaths.caseResolveByIdApi(caseId), 'POST');
            const result = await this.boomtownClient.request(apiRequest);

            return ResponseMap.response(result.data);
        } catch (error: any) {
            throw error.response && error.response.data ? ErrorMap.error(error.response.data) : error;
        }
    }

    /**
     * Retrieves a chat history for a closed cases with case id
     * @param caseId for the CaseId
     * @param caseEscalateOptions for escalate options
     * @returns
     */
    async escalate(caseId: string, caseEscalateOptions: CaseEscalateOptions): Promise<BaseResponse> {
        try {
            const payload = JSON.stringify(CasesMap.toBTCaseEscalateOptions(caseEscalateOptions));
            const apiRequest = createApiRequest(apiPaths.caseEscalateByIdApi(caseId), 'POST', payload, '', true);
            const result = await this.boomtownClient.request(apiRequest);

            return ResponseMap.response(result.data);
        } catch (error: any) {
            throw error.response && error.response.data ? ErrorMap.error(error.response.data) : error;
        }
    }

    /**
     * Retrieves a chat history for a closed cases with case id
     * @param caseId for the CaseId
     * @param caseDeEscalateOptions for de-escalate options
     * @returns
     */
    async deEscalate(caseId: string, caseDeEscalateOptions: CaseDeEscalateOptions): Promise<BaseResponse> {
        try {
            const payload = JSON.stringify(CasesMap.toBTCaseDeEscalateOptions(caseDeEscalateOptions));
            const apiRequest = createApiRequest(apiPaths.caseDeEscalateByIdApi(caseId), 'POST', payload, '', true);
            const result = await this.boomtownClient.request(apiRequest);

            return ResponseMap.response(result.data);
        } catch (error: any) {
            throw error.response && error.response.data ? ErrorMap.error(error.response.data) : error;
        }
    }

    /**
     * Retrieves a chat history for a closed cases with case id
     * @param caseId for the CaseId
     * @returns
     */
    async cancel(caseId: string): Promise<BaseResponse> {
        try {
            const apiRequest = createApiRequest(apiPaths.caseCancelByIdApi(caseId), 'POST');
            const result = await this.boomtownClient.request(apiRequest);

            return ResponseMap.response(result.data);
        } catch (error: any) {
            throw error.response && error.response.data ? ErrorMap.error(error.response.data) : error;
        }
    }

    /**
     * Retrieves a chat history for a closed cases with case id
     * @param caseId for the CaseId
     * @returns
     */
    async getStatusHistory(caseId: string): Promise<CaseStatusHistoryResponse> {
        try {
            const apiRequest = createApiRequest(apiPaths.caseStatusByIdApi(caseId), 'GET');
            const result = await this.boomtownClient.request(apiRequest);

            return CasesMap.caseStatusHistoryResponse(result.data);
        } catch (error: any) {
            throw error.response && error.response.data ? ErrorMap.error(error.response.data) : error;
        }
    }

    /**
     * Retrieves a chat history for a closed cases with case id
     * @param caseId for the CaseId
     * @returns
     */
    async getChatHistory(caseId: string): Promise<CaseChatHistoryResponse> {
        try {
            const apiRequest = createApiRequest(apiPaths.caseChatHistoryByIdApi(caseId), 'GET');
            const result = await this.boomtownClient.request(apiRequest);

            return CasesMap.caseChatHistoryResponse(result.data);
        } catch (error: any) {
            throw error.response && error.response.data ? ErrorMap.error(error.response.data) : error;
        }
    }
}
