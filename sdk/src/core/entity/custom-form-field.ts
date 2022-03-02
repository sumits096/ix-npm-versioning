import { HashMapOfStrings } from '.';

export interface CustomFormField {
    id?: string,
    type?: string,
    name?: string,
    label?: string,
    defaultValue?: string,
    listItems?: HashMapOfStrings
}
