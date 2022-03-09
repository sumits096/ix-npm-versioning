import { BaseResponse, HashMapOfStrings } from '.';
export interface HashMapResponse extends BaseResponse {
    results: HashMapOfStrings;
}
