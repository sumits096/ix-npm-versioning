import { BaseResponseModel, HashMapOfStringsModel } from '.';
export interface HashMapResponseModel extends BaseResponseModel {
    results: HashMapOfStringsModel;
}
