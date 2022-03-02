import { Service } from 'typedi';
import { HashMapResponse, MetaCustomFormsResponse } from '../entity';
import { CustomerMetaRepositoryInterface } from '../interfaces/repositories';
import { CustomerMetaServiceInterface } from '../interfaces/services';

/**
 * Customer meta service
 * @description Provide methods for customer meta endpoints.
 *
 * @BoomtownSDK
 */
@Service()
export class CustomerMetaService implements CustomerMetaServiceInterface {
    constructor(protected readonly customerMetaRepository: CustomerMetaRepositoryInterface) {}

    /**
     * Return dictionary mapping Status keys to their labels.
     * @returns
     */
    getStatus(): Promise<HashMapResponse> {
        return this.customerMetaRepository.getStatus();
    }

    /**
     * Return dictionary mapping Industries keys to their labels.
     * @returns
     */
    getIndustries(): Promise<HashMapResponse> {
        return this.customerMetaRepository.getIndustries();
    }

    /**
     * Returns collection of custom form object
     * @param orgTeamId for organization team id 
     * @returns 
     */
    customForms(orgTeamId: string): Promise<MetaCustomFormsResponse> {
        return this.customerMetaRepository.customForms(orgTeamId);
    }
}
