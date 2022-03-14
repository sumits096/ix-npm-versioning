import { BoomtownClient } from '../client/boomtown-client';
import { EnumerationItemResponse } from '../../core/entity';
import { CaseMetaRepositoryInterface } from '../../core/interfaces/repositories';
export declare class CaseMetaRepository implements CaseMetaRepositoryInterface {
    protected readonly boomtownClient: BoomtownClient;
    constructor(boomtownClient: BoomtownClient);
    getStatuses(): Promise<EnumerationItemResponse>;
    getJobs(): Promise<EnumerationItemResponse>;
    getCategories(): Promise<EnumerationItemResponse>;
    getCategoriesNew(): Promise<EnumerationItemResponse>;
    getTags(): Promise<EnumerationItemResponse>;
    getTypes(): Promise<EnumerationItemResponse>;
    getFileTags(): Promise<EnumerationItemResponse>;
    getResolutions(): Promise<EnumerationItemResponse>;
}
