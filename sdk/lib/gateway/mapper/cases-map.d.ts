import { CaseChatHistory, CaseChatHistoryResponse, CaseChatHistoryTranscript, CaseDeEscalateOptions, CaseEscalateOptions, Cases, CasesCreateRequest, CasesCreateResponse, CasesInline, CasesInline0, CasesListOptions, CasesMetadata, CasesResponse, CaseStatusHistory, CaseStatusHistoryResponse } from '../../core/entity';
import { CaseChatHistoryModel, CaseChatHistoryResponseModel, CaseChatHistoryTranscriptModel, CaseDeEscalateOptionsModel, CaseEscalateOptionsModel, CasesCreateRequestModel, CasesCreateResponseModel, CasesInline0Model, CasesInlineModel, CasesListOptionsModel, CasesMetadataModel, CasesModel, CasesResponseModel, CaseStatusHistoryModel, CaseStatusHistoryResponseModel } from '../../core/models';
export declare class CasesMap {
    static fromBTCases(model: CasesModel): Cases;
    static toBTRequestModel(model: CasesCreateRequest): CasesCreateRequestModel;
    static toBTCases(model: Cases): CasesModel;
    static casesResponse(responseModel: CasesResponseModel): CasesResponse;
    static casesCreateResponse(responseModel: CasesCreateResponseModel): CasesCreateResponse;
    static fromBTCasesInline(model: CasesInlineModel): CasesInline;
    static toBTCasesInline(model: CasesInline): CasesInlineModel;
    static fromBTCasesInlineList(casesList?: CasesInlineModel[]): CasesInline[];
    static toBTCasesInlineList(casesList?: CasesInline[]): CasesInlineModel[];
    static fromBTCasesInline0(model: CasesInline0Model): CasesInline0;
    static toBTCasesInline0(model: CasesInline0): CasesInline0Model;
    static fromBTCasesInline0List(casesList?: CasesInline0Model[]): CasesInline0[];
    static toBTCasesInline0List(casesList?: CasesInline0[]): CasesInline0Model[];
    static fromBTCasesMetadata(model: CasesMetadataModel): CasesMetadata;
    static toBTCasesMetadata(model: CasesMetadata): CasesMetadataModel;
    static toBTCasesOptionsModel(model: CasesListOptions): CasesListOptionsModel;
    static fromBTCaseStatus(model: CaseStatusHistoryModel): CaseStatusHistory;
    static toBTCaseStatus(model: CaseStatusHistory): CaseStatusHistoryModel;
    static toBTCaseEscalateOptions(model: CaseEscalateOptions): CaseEscalateOptionsModel;
    static toBTCaseDeEscalateOptions(model: CaseDeEscalateOptions): CaseDeEscalateOptionsModel;
    static caseStatusHistoryResponse(responseModel: CaseStatusHistoryResponseModel): CaseStatusHistoryResponse;
    static fromBTCaseStatusHistory(model: CaseStatusHistoryModel): CaseStatusHistory;
    static caseChatHistoryResponse(responseModel: CaseChatHistoryResponseModel): CaseChatHistoryResponse;
    static fromBTCaseChatHistory(model: CaseChatHistoryModel): CaseChatHistory;
    static fromBTCaseChatHistoryTranscript(model: CaseChatHistoryTranscriptModel): CaseChatHistoryTranscript;
}
