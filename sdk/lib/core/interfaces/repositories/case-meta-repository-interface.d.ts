import { EnumerationItemResponse } from '../../entity';
export interface CaseMetaRepositoryInterface {
    getStatuses(): Promise<EnumerationItemResponse>;
    getJobs(): Promise<EnumerationItemResponse>;
    getCategories(): Promise<EnumerationItemResponse>;
    getCategoriesNew(): Promise<EnumerationItemResponse>;
    getTags(): Promise<EnumerationItemResponse>;
    getTypes(): Promise<EnumerationItemResponse>;
    getFileTags(): Promise<EnumerationItemResponse>;
    getResolutions(): Promise<EnumerationItemResponse>;
}
