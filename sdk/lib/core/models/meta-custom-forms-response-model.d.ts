import { BaseResponseModel, CustomFormModel } from '.';
export interface MetaCustomFormsResponseModel extends BaseResponseModel {
    results: CustomFormModel[];
}
