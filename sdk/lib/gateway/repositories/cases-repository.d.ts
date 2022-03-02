import { BoomtownClient } from '../client/boomtown-client';
import { CasesResponse, CasesCreateRequest, CasesListOptions, CaseDeEscalateOptions, CaseEscalateOptions, BaseResponse, CaseStatusHistoryResponse, CaseChatHistoryResponse, CasesCreateResponse } from '../../core/entity';
import { CasesRepositoryInterface } from '../../core/interfaces/repositories';
export declare class CasesRepository implements CasesRepositoryInterface {
    protected readonly boomtownClient: BoomtownClient;
    constructor(boomtownClient: BoomtownClient);
    get(listOptions: CasesListOptions): Promise<CasesResponse>;
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
