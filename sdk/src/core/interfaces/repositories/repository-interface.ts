import { BaseResponse, ListOptions, SmsInviteData, SmsInviteResponse } from '../../entity';

/**
 * Defines base methods defination to request boomtown api's.
 *
 * @interface RepositoryInterface
 */
export interface RepositoryInterface<T extends BaseResponse> {
    /**
     * Return a collection
     * @param listOptions for the pagination of collection.
     * @returns
     */
    get(listOptions?: ListOptions): Promise<T>;

    /**
     * Return object
     * @param id for id.
     * @returns
     */
    getById(id?: string): Promise<T>;

    /**
     * Create or update record.
     * @param model for request payload.
     * @returns
     */
    post(model: any): Promise<T>;

    /**
     * Delete record
     * @param id for id
     * @returns
     */
    delete(id: string): Promise<T>;

    /**
     * Sms invite for existing/new customer
     * @param smsInviteData for sms invite details
     */
    smsInvite(smsInviteData: SmsInviteData): Promise<SmsInviteResponse>
}
