import { BaseResponse, ListOptions, SmsInviteData, SmsInviteResponse } from '../../entity';
export interface ServiceInterface<T extends BaseResponse> {
    get(listOptions?: ListOptions): Promise<T>;
    getById(id: string): Promise<T>;
    post(model: any): Promise<T>;
    delete(id: string): Promise<T>;
    smsInvite(smsInviteData: SmsInviteData): Promise<SmsInviteResponse>;
}
