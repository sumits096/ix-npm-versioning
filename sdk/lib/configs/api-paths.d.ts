export declare const apiPaths: {
    getCustomerApi: string;
    getCustomerByIdApi: (id: string) => string;
    createUpdateCustomerApi: string;
    deleteCustomerApi: (id: string) => string;
    customerMetaStatus: string;
    customerMetaIndustries: string;
    getCustomerLocationByIdApi: (id: string) => string;
    createUpdateCustomerLocationApi: string;
    deleteCustomerLocationApi: (id: string) => string;
    getCustomerLocationByExternalIdApi: string;
    getCustomerLocationMetaStatus: string;
    customerContactCheck: (email: string) => string;
    customerContactByCustomerId: (customerId: string) => string;
    customerContactByExternalId: string;
    createUpdateCustomerContact: string;
    customerContactSSO: (contactId: string) => string;
    deleteCustomerContact: (customerId: string) => string;
    getCaseMetaStatusApi: string;
    getCaseMetaJobsApi: string;
    getCaseMetaCategoriesApi: string;
    getCaseMetaCategoriesNewApi: string;
    getCaseMetaTagsApi: string;
    getCaseMetaTypesApi: string;
    getCaseMetaFileTagsApi: string;
    getCaseMetaResolutionsApi: string;
    getCasesApi: string;
    getCasesByIdApi: (id: string) => string;
    createUpdateCasesApi: string;
    getCaseFileByIdApi: (issueId: string) => string;
    caseFileUploadApi: (issueId: string) => string;
    deleteCaseFileByIdApi: (issueId: string) => string;
    createUpdateCaseLogApi: (issueId: string) => string;
    customerLookup: string;
    getLookupByIssueId: string;
    getLookupById: string;
    getLookupByEmail: string;
    getLookupByExternalId: string;
    customerMetaCustomForms: string;
    customerSmsInviteApi: string;
    customerPasswordResetApi: string;
    getCaseLogByIdApi: (issueId: string) => string;
    deleteCaseLogApi: (issueId: string) => string;
    caseScheduleByIdApi: (issueId: string) => string;
    caseCancelScheduleByIdApi: (issueId: string) => string;
    caseResolveByIdApi: (issueId: string) => string;
    caseEscalateByIdApi: (issueId: string) => string;
    caseDeEscalateByIdApi: (issueId: string) => string;
    caseCancelByIdApi: (issueId: string) => string;
    caseStatusByIdApi: (issueId: string) => string;
    caseChatHistoryByIdApi: (issueId: string) => string;
};
