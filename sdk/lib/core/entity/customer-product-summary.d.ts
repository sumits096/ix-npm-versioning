export interface CustomerProductSummary {
    id?: string;
    parentId: string;
    type: string;
    critical: boolean;
    active: boolean;
    make?: string;
    model?: string;
    lastChecked?: string;
    lastSeen?: string;
    lastChanged?: string;
    pciCompliant?: string;
    policy?: string;
    status?: string;
}
