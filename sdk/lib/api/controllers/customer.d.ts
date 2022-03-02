import { BaseResponse, CustomerCreateResponse, CustomerResponse, CustomerCreateRequest, ListOptions, SmsInviteData, SmsInviteResponse } from '../../core/entity';
import { CustomerServiceInterface } from '../../core/interfaces/services';
export declare class Customer {
    private readonly customerService;
    constructor(customerService: CustomerServiceInterface);
    get(listOptions?: ListOptions): Promise<CustomerResponse>;
    getById(id: string): Promise<CustomerResponse>;
    post(customerCreateRequest: CustomerCreateRequest): Promise<CustomerCreateResponse>;
    delete(id: string): Promise<BaseResponse>;
    smsInvite(smsInviteData: SmsInviteData): Promise<SmsInviteResponse>;
}
