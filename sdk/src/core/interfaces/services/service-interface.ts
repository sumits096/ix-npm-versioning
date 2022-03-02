import { BaseResponse, ListOptions, SmsInviteData, SmsInviteResponse } from '../../entity';

/**
 * Defines base methods defination to interact with repositories methods.
 *
 * @interface ServiceInterface
 */
export interface ServiceInterface<T extends BaseResponse> {
    /**
     * Return collection.
     * @param listOptions for pagination.
     */
    get(listOptions?: ListOptions): Promise<T>;

    /**
     * Return object.
     * @param id
     */
    getById(id: string): Promise<T>;

    /**
     * Create or Update record.
     * @param model
     */
    post(model: any): Promise<T>;

    /**
     * Delete record
     * @param id
     */
    delete(id: string): Promise<T>;

    /**
     * Sms invite for existing/new customer
     * @param smsInviteData for sms invite details
     */
    smsInvite(smsInviteData: SmsInviteData): Promise<SmsInviteResponse>
}
