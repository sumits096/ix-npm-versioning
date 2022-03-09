import { HashMapOfStringsModel } from '.';
export interface CustomFormFieldModel {
    id?: string;
    type?: string;
    name?: string;
    label?: string;
    default_value?: string;
    list_items?: HashMapOfStringsModel;
}
