import { CustomForm, MetaCustomFormsResponse } from '../../core/entity';
import { CustomFormFieldModel, CustomFormModel, MetaCustomFormsResponseModel } from '../../core/models';
import { CustomFormField } from '../../core/entity/custom-form-field';

export class MetaCustomFormsMap {

    /**
     * Return api response model
     * @param responseModel
     * @returns
     */
    static mapper(responseModel: MetaCustomFormsResponseModel): MetaCustomFormsResponse {
        const list = responseModel.results;

        const customForms = list.map(function transform(customForm: CustomFormModel) {
            return MetaCustomFormsMap.fromBTCustomForm(customForm);
        });

        automapper
            .createMap('BTMetaCustomFormsResponse', 'MetaCustomFormsResponse')
            .forMember('currentServerTime', (opts: AutoMapperJs.IMemberConfigurationOptions) =>
                opts.mapFrom('current_server_time'),
            )
            .forMember('results', customForms);

        return automapper.map('BTMetaCustomFormsResponse', 'MetaCustomFormsResponse', responseModel) as MetaCustomFormsResponse;
    }

    /**
     * Return boomtown CustomForm model from CustomForm entity
     * @param model 
     * @returns 
     */
    static fromBTCustomForm(model: CustomFormModel): CustomForm {

        const list = model.fields!;
        const customFormFields = list.map(function transform(customFormField: CustomFormFieldModel) {

            return MetaCustomFormsMap.fromBTCustomFormField(customFormField);
        });

        automapper
            .createMap('BTCustomForm', 'CustomForm')
            .forMember('orgTeamIds', (opts: AutoMapperJs.IMemberConfigurationOptions) => opts.mapFrom('org_team_ids'))
            .forMember('results', customFormFields);

        return automapper.map('BTCustomForm', 'CustomForm', model) as CustomForm;
    }

    /**
     * Return boomtown CustomFormField model from CustomFormField entity
     * @param model 
     * @returns 
     */
    static fromBTCustomFormField(model: CustomFormFieldModel): CustomFormField {

        automapper
            .createMap('BTCustomFormField', 'CustomFormField')
            .forMember('defaultValue', (opts: AutoMapperJs.IMemberConfigurationOptions) => opts.mapFrom('default_value'))
            .forMember('listItems', (opts: AutoMapperJs.IMemberConfigurationOptions) => opts.mapFrom('list_items'));

        return automapper.map('BTCustomFormField', 'CustomFormField', model) as CustomFormField;
    }

}
