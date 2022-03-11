import { BaseResponse, CustomerCreateResponse, CustomerResponse, CustomerCreateRequest, ListOptions, SmsInviteData, SmsInviteResponse } from '../../core/entity';
import { CustomerRepositoryInterface } from '../../core/interfaces/repositories';
export declare class CustomerRepository implements CustomerRepositoryInterface {
    get(listOptions?: ListOptions): Promise<CustomerResponse>;
    getById(id: string): Promise<CustomerResponse>;
    post(customerCreateRequest: CustomerCreateRequest): Promise<CustomerCreateResponse>;
    delete(id: string): Promise<BaseResponse>;
    smsInvite(smsInviteData: SmsInviteData): Promise<SmsInviteResponse>;
}
