import { BaseResponse, CaseFileUpload } from '../../entity';

/**
 * Defines methods defination for case/issue file to request boomtown api's.
 */
export interface CaseFileRepositoryInterface {
    /**
     * Return object
     * @param caseId for case id
     */
    getByCaseId(caseId?: string): Promise<BaseResponse>;

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
    delete(caseId: string, fileID: string): Promise<BaseResponse>;
}
