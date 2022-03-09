import { CaseFileResponse, CaseFileUpload } from '../../core/entity';
import { CaseFileServiceInterface } from '../../core/interfaces/services';
export declare class CaseFile {
    private readonly caseFileService;
    constructor(caseFileService: CaseFileServiceInterface);
    getByCaseId(caseId: string): Promise<CaseFileResponse>;
    post(caseId: string, fileTag: string, file: CaseFileUpload): Promise<CaseFileResponse>;
    delete(caseId: string, fileId: string): Promise<CaseFileResponse>;
}
