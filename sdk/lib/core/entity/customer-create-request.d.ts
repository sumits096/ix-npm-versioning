import { CustomerTuple } from '.';
export interface CustomerCreateRequest extends CustomerTuple {
    matchExternalId: boolean;
}
