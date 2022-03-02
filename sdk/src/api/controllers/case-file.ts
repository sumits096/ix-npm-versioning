import { Service } from 'typedi';
import { CaseFileResponse, CaseFileUpload } from '../../core/entity';
import { CaseFileServiceInterface } from '../../core/interfaces/services';

@Service()
export class CaseFile {
    constructor(private readonly caseFileService: CaseFileServiceInterface) {}
    /**
     * Returns a list of files related to an case object.
     * @param caseId for case id
     * @returns
     */
    async getByCaseId(caseId: string): Promise<CaseFileResponse> {
        return this.caseFileService.getByCaseId(caseId);
    }

    /**
     * Uploads a new file entry related to an case object.
     * @param caseId for issue id
     * @param fileTag for file tag
     * @param file for file i.e. to be uploaded
     * @returns
     */
    async post(caseId: string, fileTag: string, file: CaseFileUpload): Promise<CaseFileResponse> {
        return this.caseFileService.post(caseId, fileTag, file);
    }

    /**
     * Removes an existing file entry related to an case object.
     * @param caseId for case id
     * @param fileId for file id
     * @returns
     */
    async delete(caseId: string, fileId: string): Promise<CaseFileResponse> {
        return this.caseFileService.delete(caseId, fileId);
    }
}
