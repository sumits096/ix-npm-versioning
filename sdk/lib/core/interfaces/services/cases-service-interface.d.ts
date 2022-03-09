import { BaseResponse, CaseChatHistoryResponse, CaseDeEscalateOptions, CaseEscalateOptions, CasesCreateResponse, CasesListOptions, CasesResponse, CaseStatusHistoryResponse } from '../../entity';
export interface CasesServiceInterface {
    get(listOptions?: CasesListOptions): Promise<CasesResponse>;
    getById(id?: string): Promise<CasesResponse>;
    post(model: any): Promise<CasesCreateResponse>;
    schedule(caseId: string, scheduledTime: string): Promise<BaseResponse>;
    cancelSchedule(caseId: string): Promise<BaseResponse>;
    resolve(caseId: string): Promise<BaseResponse>;
    escalate(caseId: string, caseEscalateOptions: CaseEscalateOptions): Promise<BaseResponse>;
    deEscalate(caseId: string, caseDeEscalateOptions: CaseDeEscalateOptions): Promise<BaseResponse>;
    cancel(caseId: string): Promise<BaseResponse>;
    getStatusHistory(caseId: string): Promise<CaseStatusHistoryResponse>;
    getChatHistory(caseId: string): Promise<CaseChatHistoryResponse>;
}
