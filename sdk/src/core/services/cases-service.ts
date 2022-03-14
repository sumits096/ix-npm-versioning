import { Inject, Injectable } from '@nestjs/common';
import { CasesCreateRequest, CasesResponse, CasesListOptions, CaseEscalateOptions, CaseDeEscalateOptions, BaseResponse, CaseStatusHistoryResponse, CaseChatHistoryResponse, CasesCreateResponse } from '../entity';
import { CasesRepositoryInterface } from '../interfaces/repositories';
import { CasesServiceInterface } from '../interfaces/services';

/**
 * Cases service
 * @description Provide methods for cases endpoints.
 *
 * @BoomtownSDK
 */
@Injectable()
export class CasesService implements CasesServiceInterface {
    constructor(@Inject('CasesRepository') private readonly casesRepository: CasesRepositoryInterface) {}

    /**
     * Return a collection of cases
     * @param listOptions for the pagination of collection.
     * @returns
     */
    get(listOptions?: CasesListOptions): Promise<CasesResponse> {
        return this.casesRepository.get(listOptions);
    }

    /**
     * Return object of cases
     * @param id for cases id.
     * @returns
     */
    getById(id: string): Promise<CasesResponse> {
        return this.casesRepository.getById(id);
    }

    /**
     * Create or update cases record.
     * @param customerCreateRequest for cases payload.
     * @returns
     */
    post(casesCreateRequest: CasesCreateRequest): Promise<CasesCreateResponse> {
        return this.casesRepository.post(casesCreateRequest);
    }

    /**
     * Schedule an case for a Customer
     * @param caseId for cases id
     * @param scheduledTime for schedule time
     * @returns
     */
    schedule(caseId: string, scheduledTime: string): Promise<BaseResponse> {
        return this.casesRepository.schedule(caseId, scheduledTime);
    }

    /**
     * Cancel an case appointment for a Customer
     * @param caseId for cases id
     * @returns
     */
    cancelSchedule(caseId: string): Promise<BaseResponse> {
        return this.casesRepository.cancelSchedule(caseId);
    }

    /**
     * Resolve an case for a Customer
     * @param caseId for cases id
     * @returns
     */
    resolve(caseId: string): Promise<BaseResponse> {
        return this.casesRepository.resolve(caseId);
    }

    /**
     * Escalates an case for a Customer
     * @param caseId for cases id
     * @param caseEscalateOptions for escalate options
     * @returns
     */
    escalate(caseId: string, caseEscalateOptions: CaseEscalateOptions): Promise<BaseResponse> {
        return this.casesRepository.escalate(caseId, caseEscalateOptions);
    }

    /**
     * De-escalates an case for a Customer
     * @param caseId for cases id
     * @param caseDeEscalateOptions for de-escalate options
     * @returns
     */
    deEscalate(caseId: string, caseDeEscalateOptions: CaseDeEscalateOptions): Promise<BaseResponse> {
        return this.casesRepository.deEscalate(caseId, caseDeEscalateOptions);
    }

    /**
     * Cancel an case for a Customer
     * @param caseId for cases id
     * @returns
     */
    cancel(caseId: string): Promise<BaseResponse> {
        return this.casesRepository.cancel(caseId);
    }

    /**
     * Get a collection of case status changes
     * @param caseId for cases id
     * @returns
     */
    getStatusHistory(caseId: string): Promise<CaseStatusHistoryResponse> {
        return this.casesRepository.getStatusHistory(caseId);
    }

    /**
     * Retrieves a chat history for a closed cases with case id
     * @param caseId for the CaseId
     * @returns
     */
    getChatHistory(caseId: string): Promise<CaseChatHistoryResponse> {
        return this.casesRepository.getChatHistory(caseId);
    }
}
