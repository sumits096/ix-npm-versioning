import { Inject, Injectable } from '@nestjs/common';
import { CaseLogResponse } from '../../core/entity';
import { CaseLogServiceInterface } from '../../core/interfaces/services';

@Injectable()
export class CaseLog {
    constructor(@Inject('CaseLogService') private readonly caseLogService: CaseLogServiceInterface) {}

    /**
     * Returns case Log details by caseId
     * @param caseId for cases id
     * @returns
     */
    async getCaseLog(caseId: string): Promise<CaseLogResponse> {
        return this.caseLogService.getCaseLog(caseId);
    }

    /**
     * Uploads a new case log entry related to an case object.
     * @param caseId for issue id
     * @param notes for case log
     * @returns
     */
    async postCaseLog(caseId: string, notes: string): Promise<CaseLogResponse> {
        return this.caseLogService.postCaseLog(caseId, notes);
    }

    /**
     * Delete case log
     * @param caseId for case id
     * @param caseLogId for case id
     * @returns
     */
    async deleteCaseLog(caseId: string, caseLogId: string): Promise<CaseLogResponse> {
        return this.caseLogService.deleteCaseLog(caseId, caseLogId);
    }
}
