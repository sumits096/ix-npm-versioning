import { EnumerationItemResponse } from '../entity';
import { CaseMetaRepositoryInterface } from '../interfaces/repositories/case-meta-repository-interface';
import { CaseMetaServiceInterface } from '../interfaces/services/case-meta-service-interface';
export declare class CaseMetaService implements CaseMetaServiceInterface {
    protected readonly caseMetaRepository: CaseMetaRepositoryInterface;
    constructor(caseMetaRepository: CaseMetaRepositoryInterface);
    getStatuses(): Promise<EnumerationItemResponse>;
    getJobs(): Promise<EnumerationItemResponse>;
    getCategories(): Promise<EnumerationItemResponse>;
    getCategoriesNew(): Promise<EnumerationItemResponse>;
    getTags(): Promise<EnumerationItemResponse>;
    getTypes(): Promise<EnumerationItemResponse>;
    getFileTags(): Promise<EnumerationItemResponse>;
    getResolutions(): Promise<EnumerationItemResponse>;
}
