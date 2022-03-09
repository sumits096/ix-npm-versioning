import { BaseResponse, CaseChatHistoryResponse, CaseDeEscalateOptions, CaseEscalateOptions, CasesCreateRequest, CasesCreateResponse, CasesListOptions, CasesResponse, CaseStatusHistoryResponse } from '../../core/entity';
import { CasesServiceInterface } from '../../core/interfaces/services';
export declare class Cases {
    private readonly casesService;
    constructor(casesService: CasesServiceInterface);
    get(listOptions?: CasesListOptions): Promise<CasesResponse>;
    getById(id: string): Promise<CasesResponse>;
    post(casesCreateRequest: CasesCreateRequest): Promise<CasesCreateResponse>;
    schedule(caseId: string, scheduledTime: string): Promise<BaseResponse>;
    cancelSchedule(caseId: string): Promise<BaseResponse>;
    resolve(caseId: string): Promise<BaseResponse>;
    escalate(caseId: string, caseEscalateOptions: CaseEscalateOptions): Promise<BaseResponse>;
    deEscalate(caseId: string, caseDeEscalateOptions: CaseDeEscalateOptions): Promise<BaseResponse>;
    cancel(caseId: string): Promise<BaseResponse>;
    statusHistory(caseId: string): Promise<CaseStatusHistoryResponse>;
    chatHistory(caseId: string): Promise<CaseChatHistoryResponse>;
}
