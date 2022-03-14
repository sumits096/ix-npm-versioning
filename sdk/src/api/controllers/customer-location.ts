import { Inject, Injectable } from '@nestjs/common';
import { BaseResponse, CustomerLocationOptions, CustomerLocationResponse, CustomerLocationCreateRequest, HashMapResponse, CustomerContactResponse } from '../../core/entity';
import { CustomerLocationServiceInterface } from '../../core/interfaces/services';

@Injectable()
export class CustomerLocation {
    constructor(@Inject('CustomerLocationService') private readonly customerLocationService: CustomerLocationServiceInterface) {}

    /**
     * Returns collection of customers locations
     * @param id for customer id
     * @param customerLocationOptions for customer location query parameters
     * @returns
     */
    async getByCustomerId(id: string, customerLocationOptions?: CustomerLocationOptions): Promise<CustomerLocationResponse> {
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
     * Get a collection of contact for a Customer Location
     * @param customerId for customer id
     * @param customerLocationId for customer location id
     * @returns
     */
    async getContactByCustomerId(customerId: string, customerLocationId: string): Promise<CustomerContactResponse> {
        return this.customerLocationService.getContactByCustomerId(customerId, customerLocationId);
    }

    /**
     * Returns a dictionary for mapping 'Status' keys to labels on Customer Location objects.
     * @returns
     */
    async getMetaStatus(): Promise<HashMapResponse> {
        return this.customerLocationService.getMetaStatus();
    }
}
