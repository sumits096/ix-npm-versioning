import { HashMapResponse, MetaCustomFormsResponse } from '../../entity';

/**
 * Defines methods defination for customer meta status and meta industries to request boomtown api's.
 *
 * @interface CustomerMetaRepositoryInterface
 */
export interface CustomerMetaRepositoryInterface {
    /**
     * Return dictionary mapping Status keys to their labels.
     */
    getStatus(): Promise<HashMapResponse>;

    /**
     * Return dictionary mapping industries keys to their labels.
     */
    getIndustries(): Promise<HashMapResponse>;

    /**   
     * Returns collection of custom form object
     * @param orgTeamId for organization team id
     */
    customForms(orgTeamId: string): Promise<MetaCustomFormsResponse>;
}
