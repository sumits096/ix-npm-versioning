import { CaseFileResponse } from '../../core/entity/case-file-response';
import { CaseFileRepositoryInterface } from '../../core/interfaces/repositories';
import { BoomtownClient } from '../client/boomtown-client';
import { CaseFileUpload } from '../../core/entity';
export declare class CaseFileRepository implements CaseFileRepositoryInterface {
    protected readonly boomtownClient: BoomtownClient;
    constructor(boomtownClient: BoomtownClient);
    getByCaseId(caseId: string): Promise<CaseFileResponse>;
    post(caseId: string, fileTag: string, file: CaseFileUpload): Promise<CaseFileResponse>;
    delete(caseId: string, fileId: string): Promise<CaseFileResponse>;
}
