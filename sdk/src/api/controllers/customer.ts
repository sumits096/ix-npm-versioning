import { Service } from 'typedi';
import {
    BaseResponse,
    CustomerCreateResponse,
    CustomerResponse,
    CustomerCreateRequest,
    ListOptions,
    SmsInviteData,
    SmsInviteResponse,
} from '../../core/entity';
import { CustomerServiceInterface } from '../../core/interfaces/services';

@Service()
export class Customer {
    constructor(private readonly customerService: CustomerServiceInterface) {}

    /**
     * Returns collection of customers
     * @param listOptions for the pagination of collection
     * @returns
     */
    async get(listOptions?: ListOptions): Promise<CustomerResponse> {
        return this.customerService.get(listOptions);
    }

    /**
     * Returns customer details
     * @param id for customer id
     * @returns
     */
    async getById(id: string): Promise<CustomerResponse> {
        return this.customerService.getById(id);
    }

    /**
     * Create or update customer record.
     * @param customerCreateRequest for customer details
     * @returns
     */
    async post(customerCreateRequest: CustomerCreateRequest): Promise<CustomerCreateResponse> {
        return this.customerService.post(customerCreateRequest);
    }

    /**
     * Delete customer
     * @param id for customer id
     * @returns
     */
    async delete(id: string): Promise<BaseResponse> {
        return this.customerService.delete(id);
    }

    /**
     * Sms invite for existing/new customer
     * @param smsInviteData for sms invite details
     * @returns 
     */
    async smsInvite(smsInviteData: SmsInviteData): Promise<SmsInviteResponse> {
        return this.customerService.smsInvite(smsInviteData);
    }
}
