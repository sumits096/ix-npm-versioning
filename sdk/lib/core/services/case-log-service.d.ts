import { CaseLogResponse } from '../entity';
import { CaseLogRepositoryInterface } from '../interfaces/repositories/';
import { CaseLogServiceInterface } from '../interfaces/services/';
export declare class CaseLogService implements CaseLogServiceInterface {
    protected readonly caseLogRepository: CaseLogRepositoryInterface;
    constructor(caseLogRepository: CaseLogRepositoryInterface);
    postCaseLog(caseId: string, notes: string): Promise<CaseLogResponse>;
    getCaseLog(caseId: string): Promise<CaseLogResponse>;
    deleteCaseLog(caseId: string, caseLogId: string): Promise<CaseLogResponse>;
}
