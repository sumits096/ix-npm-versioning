import { Inject, Injectable } from '@nestjs/common';
import { BaseResponse, CustomerLocationOptions, CustomerLocationResponse, CustomerLocationCreateRequest, HashMapResponse, CustomerContactResponse } from '../entity';
import { CustomerLocationRepositoryInterface } from '../interfaces/repositories/customer-location-repository-interface';
import { CustomerLocationServiceInterface } from '../interfaces/services/customer-location-service-interface';

/**
 * Customer location service
 * @description Provide methods for customer location endpoints.
 *
 * @BoomtownSDK
 */
@Injectable()
export class CustomerLocationService implements CustomerLocationServiceInterface {
    constructor(@Inject('CustomerLocationRepository') protected readonly customerLocationRepository: CustomerLocationRepositoryInterface) {}

    /**
     * Return collection of customer location
     * @param id for customer location id.
     * @param customerLocationOptions for customer location query parameters
     * @returns
     */
    getByCustomerId(id: string, customerLocationOptions?: CustomerLocationOptions): Promise<CustomerLocationResponse> {
        return this.customerLocationRepository.getByCustomerId(id, customerLocationOptions);
    }

    /**
     * Create or update customer location record.
     * @param customerLocationCreateRequest for customer location payload.
     * @returns
     */
    post(customerLocationCreateRequest: CustomerLocationCreateRequest): Promise<CustomerLocationResponse> {
        return this.customerLocationRepository.post(customerLocationCreateRequest);
    }

    /**
     * Delete record form customers location
     * @param id for customer location id
     * @returns
     */
    delete(id: string): Promise<BaseResponse> {
        return this.customerLocationRepository.delete(id);
    }

    /**
     * Return object of customer location
     * @param id for external id.
     * @returns
     */
    getByExternalId(id: string): Promise<CustomerLocationResponse> {
        return this.customerLocationRepository.getByExternalId(id);
    }

    /**
     * Returns a paginated collection of customer contact objects related to a Customer location object.
     * @param customerId for customer id.
     * @param customerLocationId for Optional customer location Id to filter the results with.
     * @returns
     */
    getContactByCustomerId(customerId: string, customerLocationId: string): Promise<CustomerContactResponse> {
        return this.customerLocationRepository.getContactByCustomerId(customerId, customerLocationId);
    }

    /**
     * Return dictionary mapping Status keys to their labels.
     * @returns
     */
    getMetaStatus(): Promise<HashMapResponse> {
        return this.customerLocationRepository.getMetaStatus();
    }
}
