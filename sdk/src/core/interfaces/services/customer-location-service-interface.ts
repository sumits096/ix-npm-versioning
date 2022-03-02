import { BaseResponse, CustomerLocationResponse, HashMapResponse } from '../../entity';

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
     * Return dictionary mapping Status keys to their labels.
     */
    getMetaStatus(): Promise<HashMapResponse>;
}
