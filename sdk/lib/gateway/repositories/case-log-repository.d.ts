import { CaseLogResponse } from '../../core/entity';
import { CaseLogRepositoryInterface } from '../../core/interfaces/repositories';
import { BoomtownClient } from '../client/boomtown-client';
export declare class CaseLogRepository implements CaseLogRepositoryInterface {
    protected readonly boomtownClient: BoomtownClient;
    private caseLogCreateModel;
    constructor(boomtownClient: BoomtownClient);
    postCaseLog(caseId: string, notes: string): Promise<CaseLogResponse>;
    getCaseLog(caseId: string): Promise<CaseLogResponse>;
    deleteCaseLog(caseId: string, caseLogId: string): Promise<CaseLogResponse>;
}
