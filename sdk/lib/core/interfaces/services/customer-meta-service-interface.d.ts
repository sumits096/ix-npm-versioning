import { HashMapResponse, MetaCustomFormsResponse } from '../../entity';
export interface CustomerMetaServiceInterface {
    getStatus(): Promise<HashMapResponse>;
    getIndustries(): Promise<HashMapResponse>;
    customForms(orgTeamId: string): Promise<MetaCustomFormsResponse>;
}
