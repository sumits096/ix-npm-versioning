import { CaseLogResponse } from '../../entity';

/**
 * Defines methods defination for cases to request boomtown api's.
 */
export interface CaseLogRepositoryInterface {

    /**
     * Upload a new file
     * @param caseId for case id
     * @param notes for case log
     */
    postCaseLog(caseId: string, notes: string): Promise<CaseLogResponse>;


    /**
     * Return object
     * @param caseId for case id.
     * @returns
     */
    getCaseLog(caseId?: string): Promise<CaseLogResponse>;

    /**
     * Delete case log
     * @param caseId for case id
     * @param caseLogId for case log id
     */
    deleteCaseLog(CaseId: string, caseLogId: string): Promise<CaseLogResponse>;
}
