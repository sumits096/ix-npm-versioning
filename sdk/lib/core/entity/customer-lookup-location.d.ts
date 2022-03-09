import { CustomerLookupLocationMetadata, CustomerTechnologySummary, CustomFormDataList, UploadFile } from '.';
export interface CustomerLookupLocation {
    id?: string;
    customerId?: string;
    street1: string;
    street2: string;
    city: string;
    state: string;
    zipcode: string;
    latitude?: number;
    longitude?: number;
    phone?: string;
    siteName?: string;
    orgTeamIds?: [string];
    externalId?: string;
    notes?: string;
    status?: string;
    customForms?: CustomFormDataList;
    files?: UploadFile[];
    merchantIds?: string;
    metadataValues?: CustomerLookupLocationMetadata;
    technology?: CustomerTechnologySummary;
}
