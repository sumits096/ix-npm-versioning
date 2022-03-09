export interface Customer {
    id: string;
    name: string;
    nameLegal?: string;
    street1?: string;
    street2?: string;
    city?: string;
    state?: string;
    zipcode: string;
    email: string;
    phone?: string;
    externalId?: string;
    industry?: string;
    status?: string;
    created?: Date;
    latitude?: number;
    longitude?: number;
}
