import { Service } from 'typedi';
import {
    BaseResponse,
    CustomerLocationOptions,
    CustomerLocationResponse,
    CustomerLocationCreateRequest,
    HashMapResponse,
} from '../../core/entity';
import { CustomerLocationServiceInterface } from '../../core/interfaces/services';

@Service()
export class CustomerLocation {
    constructor(private readonly customerLocationService: CustomerLocationServiceInterface) {}

    /**
     * Returns collection of customers locations
     * @param id for customer id
     * @param customerLocationOptions for customer location query parameters
     * @returns
     */
    async getByCustomerId(
        id: string,
        customerLocationOptions?: CustomerLocationOptions,
    ): Promise<CustomerLocationResponse> {
        return this.customerLocationService.getByCustomerId(id, customerLocationOptions);
    }

    /**
     * Create or update customer location record.
     * @param customerLocationCreateRequest for customer location details
     * @returns
     */
    async post(customerLocationCreateRequest: CustomerLocationCreateRequest): Promise<CustomerLocationResponse> {
        return this.customerLocationService.post(customerLocationCreateRequest);
    }

    /**
     * Delete customer location
     * @param id for customer location id
     * @returns
     */
    async delete(id: string): Promise<BaseResponse> {
        return this.customerLocationService.delete(id);
    }

    /**
     * Returns collection of customers locations
     * @param id for external id
     * @returns
     */
    async getByExternalId(id: string): Promise<CustomerLocationResponse> {
        return this.customerLocationService.getByExternalId(id);
    }

    /**
     * Returns a dictionary for mapping 'Status' keys to labels on Customer Location objects.
     * @returns
     */
    async getMetaStatus(): Promise<HashMapResponse> {
        return this.customerLocationService.getMetaStatus();
    }
}
