import { Service } from 'typedi';
import { BaseResponse, CaseChatHistoryResponse, CaseDeEscalateOptions, CaseEscalateOptions, CasesCreateRequest, CasesCreateResponse, CasesListOptions, CasesResponse, CaseStatusHistoryResponse } from '../../core/entity';
import { CasesServiceInterface } from '../../core/interfaces/services';

@Service()
export class Cases {
    constructor(private readonly casesService: CasesServiceInterface) { }

    /**
     * Returns collection of cases
     * @param listOptions for the pagination of collection
     * @returns
     */
    async get(listOptions?: CasesListOptions): Promise<CasesResponse> {
        return this.casesService.get(listOptions);
    }

    /**
     * Returns cases details
     * @param id for cases id
     * @returns
     */
    async getById(id: string): Promise<CasesResponse> {
        return this.casesService.getById(id);
    }

    /**
     * Create or update cases record.
     * @param casesCreateRequest for cases details
     * @returns
     */
    async post(casesCreateRequest: CasesCreateRequest): Promise<CasesCreateResponse> {
        return this.casesService.post(casesCreateRequest);
    }

    /**
     * Schedule an case for a Customer
     * @param caseId for cases id
     * @param scheduledTime for schedule time
     * @returns 
     */
    async schedule(caseId: string, scheduledTime: string): Promise<BaseResponse> {
        return this.casesService.schedule(caseId, scheduledTime);
    }

    /**
     * Cancel an case appointment for a Customer
     * @param caseId for cases id
     * @returns 
     */
    async cancelSchedule(caseId: string): Promise<BaseResponse> {
        return this.casesService.cancelSchedule(caseId);
    }

    /**
     * Resolve an case for a Customer
     * @param caseId for cases id
     * @returns 
     */
    async resolve(caseId: string): Promise<BaseResponse> {
        return this.casesService.resolve(caseId);
    }

    /**
     * Escalates an case for a Customer
     * @param caseId for cases id
     * @param caseEscalateOptions for escalate options
     * @returns 
     */
    async escalate(caseId: string, caseEscalateOptions: CaseEscalateOptions): Promise<BaseResponse> {
        return this.casesService.escalate(caseId, caseEscalateOptions);
    }

    /**
     * De-escalates an case for a Customer
     * @param caseId for cases id
     * @param caseDeEscalateOptions for de-escalate options
     * @returns 
     */
    async deEscalate(caseId: string, caseDeEscalateOptions: CaseDeEscalateOptions): Promise<BaseResponse> {
        return this.casesService.deEscalate(caseId, caseDeEscalateOptions);
    }

    /**
     * Cancel an case for a Customer
     * @param caseId for cases id
     * @returns 
     */
    async cancel(caseId: string): Promise<BaseResponse> {
        return this.casesService.cancel(caseId);
    }

    /**
     * Get a collection of case status changes
     * @param caseId for cases id
     * @returns 
     */
    async statusHistory(caseId: string): Promise<CaseStatusHistoryResponse> {
        return this.casesService.getStatusHistory(caseId);
    }

    /**
     * Retrieves a chat history for a closed cases with case id
     * @param caseId for the CaseId
     * @returns 
     */
    async chatHistory(caseId: string): Promise<CaseChatHistoryResponse> {
        return this.casesService.getChatHistory(caseId);
    }
}
