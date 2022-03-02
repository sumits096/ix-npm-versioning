import { BaseResponse, CaseFileResponse, CaseFileUpload } from '../../entity';
export interface CaseFileServiceInterface {
    getByCaseId(caseId: string): Promise<CaseFileResponse>;
    post(caseId: string, fileTag: string, file: CaseFileUpload): Promise<BaseResponse>;
    delete(caseId: string, fileId: string): Promise<CaseFileResponse>;
}
