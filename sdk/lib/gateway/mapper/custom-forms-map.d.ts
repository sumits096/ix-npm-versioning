import 'automapper-ts';
import { CustomFormData, CustomFormDataList } from '../../core/entity';
import { CustomFormDataListModel, CustomFormDataModel } from '../../core/models';
export declare class CustomerFormsMap {
    static fromBTCustomFormsList(model?: CustomFormDataListModel): CustomFormDataList;
    static fromBTCustomForms(model?: CustomFormDataModel): CustomFormData;
    static toBCustomFormsDataList(model: CustomFormDataList): CustomFormDataListModel;
    static toBTCustomForms(model: CustomFormData): CustomFormDataModel;
}
