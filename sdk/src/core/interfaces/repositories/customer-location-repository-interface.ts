import { BaseResponse, CustomerLocationOptions, CustomerLocationResponse, HashMapResponse } from '../../entity';

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
     * Return dictionary mapping Status keys to their labels.
     */
    getMetaStatus(): Promise<HashMapResponse>;
}
