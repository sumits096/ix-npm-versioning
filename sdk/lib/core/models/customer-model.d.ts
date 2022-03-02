export interface CustomerModel {
    id: string;
    name: string;
    name_legal?: string;
    street_1?: string;
    street_2?: string;
    city?: string;
    state?: string;
    zipcode: string;
    email: string;
    phone?: string;
    external_id?: string;
    industry?: string;
    status?: string;
    created?: string;
    latitude?: number;
    longitude?: number;
}
