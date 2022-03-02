import { BaseResponseModel, EnumerationItem } from '.';

export interface EnumerationItemResponseModel extends BaseResponseModel {
    results: EnumerationItem;
}
