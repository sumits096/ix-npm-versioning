import {
    CustomerLocationMetadataModel,
    CustomerProductSummaryModel,
    CustomFormDataListModel,
    UploadFileModel,
} from '.';

export interface CustomerLocationModel {
    id?: string;
    customer_id?: string;
    street_1: string;
    street_2: string;
    city: string;
    state: string;
    zipcode: string;
    latitude?: number;
    longitude?: number;
    phone?: string;
    site_name?: string;
    org_team_ids?: [string];
    external_id?: string;
    notes?: string;
    status?: string;
    custom_forms?: CustomFormDataListModel;
    files?: UploadFileModel[];
    merchant_ids?: string;
    metadata_values?: CustomerLocationMetadataModel;
    products?: CustomerProductSummaryModel;
}
