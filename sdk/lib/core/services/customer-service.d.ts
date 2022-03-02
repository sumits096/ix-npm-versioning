import { BaseResponse, CustomerCreateResponse, CustomerResponse, CustomerCreateRequest, ListOptions, SmsInviteData, SmsInviteResponse } from '../entity';
import { CustomerRepositoryInterface } from '../interfaces/repositories';
import { CustomerServiceInterface } from '../interfaces/services';
export declare class CustomerService implements CustomerServiceInterface {
    protected readonly customerRepository: CustomerRepositoryInterface;
    constructor(customerRepository: CustomerRepositoryInterface);
    get(listOptions?: ListOptions): Promise<CustomerResponse>;
    getById(id: string): Promise<CustomerResponse>;
    post(customerCreateRequest: CustomerCreateRequest): Promise<CustomerCreateResponse>;
    delete(id: string): Promise<BaseResponse>;
    smsInvite(smsInviteData: SmsInviteData): Promise<SmsInviteResponse>;
}
