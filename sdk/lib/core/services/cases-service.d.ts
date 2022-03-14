import { CasesCreateRequest, CasesResponse, CasesListOptions, CaseEscalateOptions, CaseDeEscalateOptions, BaseResponse, CaseStatusHistoryResponse, CaseChatHistoryResponse, CasesCreateResponse } from '../entity';
import { CasesRepositoryInterface } from '../interfaces/repositories';
import { CasesServiceInterface } from '../interfaces/services';
export declare class CasesService implements CasesServiceInterface {
    private readonly casesRepository;
    constructor(casesRepository: CasesRepositoryInterface);
    get(listOptions?: CasesListOptions): Promise<CasesResponse>;
    getById(id: string): Promise<CasesResponse>;
    post(casesCreateRequest: CasesCreateRequest): Promise<CasesCreateResponse>;
    schedule(caseId: string, scheduledTime: string): Promise<BaseResponse>;
    cancelSchedule(caseId: string): Promise<BaseResponse>;
    resolve(caseId: string): Promise<BaseResponse>;
    escalate(caseId: string, caseEscalateOptions: CaseEscalateOptions): Promise<BaseResponse>;
    deEscalate(caseId: string, caseDeEscalateOptions: CaseDeEscalateOptions): Promise<BaseResponse>;
    cancel(caseId: string): Promise<BaseResponse>;
    getStatusHistory(caseId: string): Promise<CaseStatusHistoryResponse>;
    getChatHistory(caseId: string): Promise<CaseChatHistoryResponse>;
}
