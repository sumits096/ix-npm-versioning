import { Service } from 'typedi';
import { CaseLogResponse } from '../../core/entity';
import { CaseLogCreateModel } from '../../core/models';
import { CaseLogRepositoryInterface } from '../../core/interfaces/repositories';
import { BoomtownClient } from '../client/boomtown-client';
import { apiPaths } from '../../configs/api-paths';
import { createApiRequest } from '../../core/helpers';
import { CaseLogMapper, ErrorMap } from '../mapper';

/**
 * Case Log repository
 * @description Provide methods for cases endpoints.
 *
 * @BoomtownSDK
 */
@Service()
export class CaseLogRepository implements CaseLogRepositoryInterface {
    private caseLogCreateModel: CaseLogCreateModel = {} as CaseLogCreateModel;
    constructor(protected readonly boomtownClient: BoomtownClient) { }

    /**
     * Uploads a new case log entry related to an case object.
     * @param caseId for case id
     * @param notes for case log
     * @returns
     */
    async postCaseLog(caseId: string, notes: string): Promise<CaseLogResponse> {
        try {
            this.caseLogCreateModel.notes = notes;
            const apiRequest = createApiRequest(
                apiPaths.createUpdateCaseLogApi(caseId),
                'POST',
                JSON.stringify(this.caseLogCreateModel)
            );
            const result = await this.boomtownClient.request(apiRequest);

            return CaseLogMapper.caseLogResponse(result.data);
        } catch (error: any) {
            throw error.response && error.response.data ? ErrorMap.error(error.response.data) : error;
        }
    }

    /**
     * Returns a object of case log
     * @param caseId cases id.
     * @returns
     */
    async getCaseLog(caseId: string): Promise<CaseLogResponse> {
        try {
            const apiRequest = createApiRequest(apiPaths.getCaseLogByIdApi(caseId), 'GET');
            const result = await this.boomtownClient.request(apiRequest);
            
            return CaseLogMapper.caseLogResponse(result.data);
        } catch (error: any) {
            throw error.response && error.response.data ? ErrorMap.error(error.response.data) : error;
        }
    }

    /**
     * Delete record from case log
     * @param caseId for case id.
     * @param caseLogId for case log id.
     * @returns
     */
    async deleteCaseLog(caseId: string, caseLogId: string): Promise<CaseLogResponse> {
        try {
            this.caseLogCreateModel.issue_log_id = caseLogId;
            const apiRequest = createApiRequest(
                apiPaths.deleteCaseLogApi(caseId),
                'POST',
                JSON.stringify(this.caseLogCreateModel),
            );
            const result = await this.boomtownClient.request(apiRequest);

            return CaseLogMapper.caseLogResponse(result.data);
        } catch (error: any) {
            throw error.response && error.response.data ? ErrorMap.error(error.response.data) : error;
        }
    }
}
