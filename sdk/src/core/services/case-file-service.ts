import { Inject, Injectable } from '@nestjs/common';
import { CaseFileResponse, CaseFileUpload } from '../entity';
import { CaseFileRepositoryInterface } from '../interfaces/repositories';
import { CaseFileServiceInterface } from '../interfaces/services';

/**
 * Case/Issues file service
 * @description Provide methods for issues/case file endpoints.
 *
 * @BoomtownSDK
 */
@Injectable()
export class CaseFileService implements CaseFileServiceInterface {
    constructor(@Inject('CaseFileRepository') protected readonly caseFileRepository: CaseFileRepositoryInterface) {}

    /**
     * Returns a list of files related to an case object.
     * @param caseId for case id
     * @returns
     */
    getByCaseId(caseId: string): Promise<CaseFileResponse> {
        return this.caseFileRepository.getByCaseId(caseId);
    }

    /**
     * Uploads a new file entry related to an case object.
     * @param caseId for case id
     * @param fileTag for file tag
     * @param file for file i.e. to be uploaded
     * @returns
     */
    post(caseId: string, fileTag: string, file: CaseFileUpload): Promise<CaseFileResponse> {
        return this.caseFileRepository.post(caseId, fileTag, file);
    }

    /**
     * Removes an existing file entry related to an case object.
     * @param caseId for case id
     * @param fileId for file id
     * @returns
     */
    delete(caseId: string, fileId: string): Promise<CaseFileResponse> {
        return this.caseFileRepository.delete(caseId, fileId);
    }
}
