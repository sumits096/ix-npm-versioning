import { HashMapResponse, MetaCustomFormsResponse } from '../../entity';
export interface CustomerMetaRepositoryInterface {
    getStatus(): Promise<HashMapResponse>;
    getIndustries(): Promise<HashMapResponse>;
    customForms(orgTeamId: string): Promise<MetaCustomFormsResponse>;
}
