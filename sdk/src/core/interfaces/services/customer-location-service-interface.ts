import { BaseResponse, CustomerContactResponse, CustomerLocationResponse, HashMapResponse } from '../../entity';

/**
 * Defines methods defination for customer location to interact with customer location repository.
 *
 * @interface CustomerLocationServiceInterface
 */
export interface CustomerLocationServiceInterface {
    /**
     * Return collection of Customer Location.
     * @param id for customer id.
     */
    getByCustomerId(id: string, options?: any): Promise<CustomerLocationResponse>;

    /**
     * Create or Update record.
     * @param model
     */
    post(model: any): Promise<BaseResponse>;

    /**
     * Delete record
     * @param id
     */
    delete(id: string): Promise<BaseResponse>;

    /**
     * Return collection of Customer Location.
     * @param id for external id.
     */
    getByExternalId(id: string): Promise<CustomerLocationResponse>;

    /**
     * Returns a paginated collection of customer contact objects related to a Customer location object.
     * @param customerId for customer id
     * @param customerLocationId for Optional customer location id to filter the results with
     */
    getContactByCustomerId(customerId: string, customerLocationId: string): Promise<CustomerContactResponse>;

    /**
     * Return dictionary mapping Status keys to their labels.
     */
    getMetaStatus(): Promise<HashMapResponse>;
}
