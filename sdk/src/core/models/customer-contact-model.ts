export interface CustomerContactModel {
    id?: string;
    customer_id: string;
    customer_location_id?: string;
    first_name: string;
    last_name: string;
    full_name?: string;
    email: string;
    sms_number?: string;
    external_id?: string;
    lang?: string;
    status?: string;
}
