import { CasesInlineModel, CasesInline0Model, CasesMetadataModel } from '.';
export interface CasesModel {
    id?: string;
    reference_num?: string;
    remote_id?: string;
    display_name?: string;
    customer_id: string;
    customer_name?: string;
    customer_email?: string;
    customer_location_id: string;
    customer_location_name?: string;
    customer_user_id: string;
    customer_user_name?: string;
    customer_user_email?: string;
    user_id?: string;
    external_id?: string;
    type?: string;
    category?: string;
    details?: string;
    status?: string;
    job?: string;
    resolution?: string;
    created?: string;
    updated?: string;
    scheduled_time?: string;
    enroute_time?: string;
    arrival_time?: string;
    departure_time?: string;
    idr_isq?: string;
    idr_process?: string;
    idr_resolution?: string;
    tech_support_minutes?: number;
    special_notes?: string;
    unmanaged?: boolean;
    owner_org_team_id?: string;
    sponsor_org_team_id?: string;
    tags?: [string];
    category_new?: string;
    members_devices: CasesInlineModel[];
    kb_articles: CasesInline0Model[];
    metadata_values: CasesMetadataModel;
}
