import { HashMapResponse, MetaCustomFormsResponse } from '../entity';
import { CustomerMetaRepositoryInterface } from '../interfaces/repositories';
import { CustomerMetaServiceInterface } from '../interfaces/services';
export declare class CustomerMetaService implements CustomerMetaServiceInterface {
    protected readonly customerMetaRepository: CustomerMetaRepositoryInterface;
    constructor(customerMetaRepository: CustomerMetaRepositoryInterface);
    getStatus(): Promise<HashMapResponse>;
    getIndustries(): Promise<HashMapResponse>;
    customForms(orgTeamId: string): Promise<MetaCustomFormsResponse>;
}
