import { createApiRequest } from '../../core/helpers';
import { CaseFileResponse } from '../../core/entity/case-file-response';
import { CaseFileRepositoryInterface } from '../../core/interfaces/repositories';
import { BoomtownClient } from '../client/boomtown-client';
import { apiPaths } from '../../configs/api-paths';
import { ErrorMap, CaseFileMap } from '../mapper';
import { CaseFileUpload } from '../../core/entity';
import { Inject, Injectable } from '@nestjs/common';

/**
 * Case/issues file repository
 * @description Provide methods for case/issues file endpoints.
 *
 * @BoomtownSDK
 */
@Injectable()
export class CaseFileRepository implements CaseFileRepositoryInterface {
    constructor(@Inject('BoomtownClient') protected readonly boomtownClient: BoomtownClient) {}

    /**
     * Returns a list of files related to an case object.
     * @param caseId for case id
     * @returns
     */
    async getByCaseId(caseId: string): Promise<CaseFileResponse> {
        try {
            const apiRequest = createApiRequest(apiPaths.getCaseFileByIdApi(caseId), 'GET');
            const result = await this.boomtownClient.request(apiRequest);

            return CaseFileMap.responseCaseFileMapper(result.data);
        } catch (error: any) {
            throw error.response && error.response.data ? ErrorMap.error(error.response.data) : error;
        }
    }

    /**
     * Uploads a new file entry related to an case object.
     * @param caseId for case id
     * @param fileTag for file tag
     * @param file for file i.e. to be uploaded
     * @returns
     */
    async post(caseId: string, fileTag: string, file: CaseFileUpload): Promise<CaseFileResponse> {
        try {
            const caseFileDataModel = CaseFileMap.toCaseFileQueryModel(fileTag);
            const payload = CaseFileMap.toBTCaseFileUploadModel(file);
            const apiRequest = createApiRequest(apiPaths.caseFileUploadApi(caseId), 'POST', JSON.stringify(payload), caseFileDataModel, true);
            const result = await this.boomtownClient.request(apiRequest);

            return CaseFileMap.responseCaseFileMapper(result.data);
        } catch (error: any) {
            throw error.response && error.response.data ? ErrorMap.error(error.response.data) : error;
        }
    }

    /**
     * Removes an existing file entry related to an case object.
     * @param caseId for case id
     * @param fileId for file id
     * @returns
     */
    async delete(caseId: string, fileId: string): Promise<CaseFileResponse> {
        try {
            const caseFileDataModel = CaseFileMap.toCaseFileDataModel(fileId);
            const apiRequest = createApiRequest(apiPaths.deleteCaseFileByIdApi(caseId), 'POST', JSON.stringify(caseFileDataModel), '', true);
            const result = await this.boomtownClient.request(apiRequest);

            return CaseFileMap.responseCaseFileMapper(result.data);
        } catch (error: any) {
            throw error.response && error.response.data ? ErrorMap.error(error.response.data) : error;
        }
    }
}
