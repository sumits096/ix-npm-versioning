import { HashMapResponse, MetaCustomFormsResponse } from '../../core/entity';
import { CustomerMetaServiceInterface } from '../../core/interfaces/services';
export declare class CustomerMeta {
    private readonly customerMetaService;
    constructor(customerMetaService: CustomerMetaServiceInterface);
    status(): Promise<HashMapResponse>;
    industries(): Promise<HashMapResponse>;
    customForms(orgTeamId: string): Promise<MetaCustomFormsResponse>;
}
