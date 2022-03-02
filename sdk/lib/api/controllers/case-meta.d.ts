import { EnumerationItemResponse } from '../../core/entity';
import { CaseMetaServiceInterface } from '../../core/interfaces/services';
export declare class CaseMeta {
    private readonly caseMetaService;
    constructor(caseMetaService: CaseMetaServiceInterface);
    statuses(): Promise<EnumerationItemResponse>;
    jobs(): Promise<EnumerationItemResponse>;
    categories(): Promise<EnumerationItemResponse>;
    categoriesNew(): Promise<EnumerationItemResponse>;
    tags(): Promise<EnumerationItemResponse>;
    types(): Promise<EnumerationItemResponse>;
    fileTags(): Promise<EnumerationItemResponse>;
    resolutions(): Promise<EnumerationItemResponse>;
}
