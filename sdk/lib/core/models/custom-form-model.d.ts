import { CustomFormFieldModel } from '.';
export interface CustomFormModel {
    id?: string;
    name?: string;
    type?: string;
    org_team_ids?: [string];
    created?: string;
    updated?: string;
    fields?: CustomFormFieldModel[];
}
