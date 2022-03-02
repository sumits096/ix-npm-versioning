import { BaseResponse, CaseFileUpload } from '../../entity';
export interface CaseFileRepositoryInterface {
    getByCaseId(caseId?: string): Promise<BaseResponse>;
    post(caseId: string, fileTag: string, file: CaseFileUpload): Promise<BaseResponse>;
    delete(caseId: string, fileID: string): Promise<BaseResponse>;
}
