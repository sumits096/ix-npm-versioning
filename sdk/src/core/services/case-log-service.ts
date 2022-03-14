import { Inject, Injectable } from '@nestjs/common';
import { CaseLogResponse } from '../entity';
import { CaseLogRepositoryInterface } from '../interfaces/repositories/';
import { CaseLogServiceInterface } from '../interfaces/services/';

/**
 * Cases service
 * @description Provide methods for cases endpoints.
 *
 * @BoomtownSDK
 */
@Injectable()
export class CaseLogService implements CaseLogServiceInterface {
    constructor(@Inject('CaseLogRepository') protected readonly caseLogRepository: CaseLogRepositoryInterface) {}

    /**
     * Uploads a case log entry related to an case object.
     * @param caseId for case id
     * @param notes for case log
     * @returns
     */
    postCaseLog(caseId: string, notes: string): Promise<CaseLogResponse> {
        return this.caseLogRepository.postCaseLog(caseId, notes);
    }

    /**
     * Return object of case log
     * @param caseId for case id.
     * @returns
     */
    getCaseLog(caseId: string): Promise<CaseLogResponse> {
        return this.caseLogRepository.getCaseLog(caseId);
    }

    /**
     * Delete record form case log
     * @param caseId for case id
     * @param caseLogId for case log id
     * @returns
     */
    deleteCaseLog(caseId: string, caseLogId: string): Promise<CaseLogResponse> {
        return this.caseLogRepository.deleteCaseLog(caseId, caseLogId);
    }
}
