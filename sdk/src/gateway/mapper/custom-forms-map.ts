import { CustomFormData, CustomFormDataList } from '../../core/entity';
import { CustomFormDataListModel, CustomFormDataModel } from '../../core/models';

export class CustomerFormsMap {
    /**
     * Return entity custom forms list from boomtown model
     * @param model boomtown custom form data list model.
     * @returns
     */
    static fromBTCustomFormsList(model?: CustomFormDataListModel): CustomFormDataList {
        automapper
            .createMap('BTCustomFormDataList', 'CustomFormDataList')
            .forMember('id', this.fromBTCustomForms(model?.id));

        return automapper.map('BTCustomFormDataList', 'CustomFormDataList', model) as CustomFormDataList;
    }

    /**
     * Return entity custom forms from boomtown model
     * @param model boomtown custom form data model.
     * @returns
     */
    static fromBTCustomForms(model?: CustomFormDataModel): CustomFormData {
        automapper.createMap('BTCustomFormData', 'CustomFormData');

        return automapper.map('BTCustomFormData', 'CustomFormData', model) as CustomFormData;
    }

    /**
     * Return entity custom forms from boomtown model
     * @param model boomtown custom form data list model.
     * @returns
     */
    static toBCustomFormsDataList(model: CustomFormDataList): CustomFormDataListModel {
        automapper
            .createMap('CustomFormDataList', 'BTCustomFormDataList')
            .forMember('id', this.toBTCustomForms(model?.id));

        return automapper.map('CustomFormDataList', 'BTCustomFormDataList', model) as CustomFormDataListModel;
    }

    /**
     * Return entity custom forms from boomtown model
     * @param model boomtown custom form data model.
     * @returns
     */
    static toBTCustomForms(model: CustomFormData): CustomFormDataModel {
        automapper.createMap('CustomFormData', 'BTCustomFormData');

        return automapper.map('CustomFormData', 'BTCustomFormData', model) as CustomFormDataModel;
    }
}
