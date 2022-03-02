import { BaseResponse, HashMapOfStrings } from '.';

/**
 * Interface defining the property object that describes the Hash Map of string response.
 *
 * @see [HashMapResponse](https://github.com/goboomtown/entities-ts/tree/master/docs)
 *
 * @BoomtownApi
 */
export interface HashMapResponse extends BaseResponse {
    results: HashMapOfStrings;
}
