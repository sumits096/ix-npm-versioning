export interface CustomerProductSummaryModel {
    id?: string;
    parent_id: string;
    type: string;
    critical: boolean;
    active: boolean;
    make?: string;
    model?: string;
    last_checked?: string;
    last_seen?: string;
    last_changed?: string;
    pci_compliant?: string;
    policy?: string;
    status?: string;
}
