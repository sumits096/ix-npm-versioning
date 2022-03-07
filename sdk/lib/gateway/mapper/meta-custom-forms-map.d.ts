import { CustomForm, MetaCustomFormsResponse } from '../../core/entity';
import { CustomFormFieldModel, CustomFormModel, MetaCustomFormsResponseModel } from '../../core/models';
import { CustomFormField } from '../../core/entity/custom-form-field';
export declare class MetaCustomFormsMap {
    static mapper(responseModel: MetaCustomFormsResponseModel): MetaCustomFormsResponse;
    static fromBTCustomForm(model: CustomFormModel): CustomForm;
    static fromBTCustomFormField(model: CustomFormFieldModel): CustomFormField;
}
