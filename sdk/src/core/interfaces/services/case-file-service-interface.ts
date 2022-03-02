import { BaseResponse, CaseFileResponse, CaseFileUpload } from '../../entity';

/**
 * Defines methods defination for case/issue file to interact with case/issue file repository.
 *
 * @interface CaseFileServiceInterface
 */
export interface CaseFileServiceInterface {
    /**
     * Return object
     * @param caseId for case id
     */
    getByCaseId(caseId: string): Promise<CaseFileResponse>;

    /**
     * Upload a new file
     * @param caseId for case id
     * @param fileTag for file tag
     * @param file for file i.e. to be uploaded
     */
    post(caseId: string, fileTag: string, file: CaseFileUpload): Promise<BaseResponse>;

    /**
     * Delete record
     * @param caseId for case id
     * @param fileId for file id
     */
    delete(caseId: string, fileId: string): Promise<CaseFileResponse>;
}
