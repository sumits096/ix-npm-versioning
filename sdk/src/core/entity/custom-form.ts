import { CustomFormField } from '.';

export interface CustomForm {
    id?: string,
    name?: string,
    type?: string,
    orgTeamIds?: [string],
    created?: string,
    updated?: string,
    fields?: CustomFormField[]
}
