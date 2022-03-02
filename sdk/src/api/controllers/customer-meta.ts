import { Service } from 'typedi';
import { HashMapResponse, MetaCustomFormsResponse } from '../../core/entity';
import { CustomerMetaServiceInterface } from '../../core/interfaces/services';

@Service()
export class CustomerMeta {
    constructor(private readonly customerMetaService: CustomerMetaServiceInterface) { }

    /**
     * Returns a dictionary for mapping 'Status' keys to labels on Customer/CustomerUser objects.
     * @returns
     */
    async status(): Promise<HashMapResponse> {
        return this.customerMetaService.getStatus();
    }

    /**
     * Returns a dictionary for mapping 'industries' keys to labels on Customer/CustomerUser objects.
     * @returns
     */
    async industries(): Promise<HashMapResponse> {
        return this.customerMetaService.getIndustries();
    }

    /**
     * Returns collection of custom form object
     * @param orgTeamId for organization team id
     * @returns 
     */
    async customForms(orgTeamId: string): Promise<MetaCustomFormsResponse> {
        return this.customerMetaService.customForms(orgTeamId);
    }
}
