import { BaseResponse, EnumerationItem } from '.';

/**
 *  * Interface defining the property object that describes the Hash Map of string response.
 *
 * @see [EnumerationItemResponce](https://github.com/goboomtown/entities-ts/tree/master/docs)
 *
 * @BoomtownApi
 */

export interface EnumerationItemResponse extends BaseResponse {
    results: EnumerationItem;
}
