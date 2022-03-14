import { BaseResponse, CustomerContactResponse, CustomerLocationOptions, CustomerLocationResponse, HashMapResponse } from '../../entity';

/**
 * Defines methods defination for customer location to request boomtown api's.
 */
export interface CustomerLocationRepositoryInterface {
    /**
     * Return object
     * @param id for customer id.
     * @returns
     */
    getByCustomerId(id?: string, customerLocationOptions?: CustomerLocationOptions): Promise<BaseResponse>;

    /**
     * Create or update record.
     * @param model for request payload.
     * @returns
     */
    post(model: any): Promise<BaseResponse>;

    /**
     * Delete record
     * @param id for id
     * @returns
     */
    delete(id: string): Promise<BaseResponse>;

    /**
     * Return collection of Customer Location.
     * @param id for external id.
     * @returns
     */
    getByExternalId(id?: string): Promise<CustomerLocationResponse>;

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
