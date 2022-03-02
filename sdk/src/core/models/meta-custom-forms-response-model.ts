import { BaseResponseModel, CustomFormModel } from '.';

/**
 *
 * @BoomtownApi
 */
export interface MetaCustomFormsResponseModel extends BaseResponseModel {
    results: CustomFormModel[]
}
