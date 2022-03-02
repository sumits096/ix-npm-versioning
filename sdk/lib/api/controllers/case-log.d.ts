import { CaseLogResponse } from '../../core/entity';
import { CaseLogServiceInterface } from '../../core/interfaces/services';
export declare class CaseLog {
    private readonly caseLogService;
    constructor(caseLogService: CaseLogServiceInterface);
    getCaseLog(caseId: string): Promise<CaseLogResponse>;
    postCaseLog(caseId: string, notes: string): Promise<CaseLogResponse>;
    deleteCaseLog(caseId: string, caseLogId: string): Promise<CaseLogResponse>;
}
