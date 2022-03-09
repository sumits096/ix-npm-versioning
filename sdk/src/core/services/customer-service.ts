import { Inject, Injectable } from '@nestjs/common'; 
import { Service } from 'typedi';
import { BaseResponse, CustomerCreateResponse, CustomerResponse, CustomerCreateRequest, ListOptions, SmsInviteData, SmsInviteResponse } from '../entity';
import { CustomerRepositoryInterface } from '../interfaces/repositories';
import { CustomerServiceInterface } from '../interfaces/services';

/**
 * Customer service
 * @description Provide methods for customer endpoints.
 *
 * @BoomtownSDK
 */
@Service()
@Injectable()
export class CustomerService implements CustomerServiceInterface {
    constructor(@Inject('CustomerRepository') protected readonly customerRepository: CustomerRepositoryInterface) {}

    /**
     * Return a collection of customers
     * @param listOptions for the pagination of collection.
     * @returns
     */
    get(listOptions?: ListOptions): Promise<CustomerResponse> {
        return this.customerRepository.get(listOptions);
    }

    /**
     * Return object of customer
     * @param id for customer id.
     * @returns
     */
    getById(id: string): Promise<CustomerResponse> {
        return this.customerRepository.getById(id);
    }

    /**
     * Create or update customer record.
     * @param customerCreateRequest for customer payload.
     * @returns
     */
    post(customerCreateRequest: CustomerCreateRequest): Promise<CustomerCreateResponse> {
        return this.customerRepository.post(customerCreateRequest);
    }

    /**
     * Delete record form customers
     * @param id for customer id
     * @returns
     */
    delete(id: string): Promise<BaseResponse> {
        return this.customerRepository.delete(id);
    }

    /**
     * Sms invite for existing/new customer
     * @param smsInviteData for sms invite details
     * @returns 
     */
    smsInvite(smsInviteData: SmsInviteData): Promise<SmsInviteResponse> {
        return this.customerRepository.smsInvite(smsInviteData);
    }
}
