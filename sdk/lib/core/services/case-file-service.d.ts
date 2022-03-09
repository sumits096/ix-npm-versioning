import { CaseFileResponse, CaseFileUpload } from '../entity';
import { CaseFileRepositoryInterface } from '../interfaces/repositories';
import { CaseFileServiceInterface } from '../interfaces/services';
export declare class CaseFileService implements CaseFileServiceInterface {
    protected readonly caseFileRepository: CaseFileRepositoryInterface;
    constructor(caseFileRepository: CaseFileRepositoryInterface);
    getByCaseId(caseId: string): Promise<CaseFileResponse>;
    post(caseId: string, fileTag: string, file: CaseFileUpload): Promise<CaseFileResponse>;
    delete(caseId: string, fileId: string): Promise<CaseFileResponse>;
}
