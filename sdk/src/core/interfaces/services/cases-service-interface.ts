import { BaseResponse, CaseChatHistoryResponse, CaseDeEscalateOptions, CaseEscalateOptions, CasesCreateResponse, CasesListOptions, CasesResponse, CaseStatusHistoryResponse } from '../../entity';

/**
 * Defines methods defination for cases to interact with cases repository.
 *
 * @interface CasesServiceInterface
 */
export interface CasesServiceInterface {
  /**
   * Return a collection
   * @param listOptions for the pagination of collection.
   * @returns
   */
  get(listOptions?: CasesListOptions): Promise<CasesResponse>;

  /**
   * Return object
   * @param id for id.
   * @returns
   */
  getById(id?: string): Promise<CasesResponse>;

  /**
    * Create or update record.
    * @param model for request payload.
    * @returns 
    */
  post(model: any): Promise<CasesCreateResponse>;

  /**
   * Schedule an case for a Customer
   * @param caseId for cases id
   * @param scheduledTime for schedule time
   * @returns 
   */
  schedule(caseId: string, scheduledTime: string): Promise<BaseResponse>;

  /**
   * Cancel an case appointment for a Customer
   * @param caseId for cases id
   * @returns 
   */
  cancelSchedule(caseId: string): Promise<BaseResponse>;

  /**
   * Resolve an case for a Customer
   * @param caseId for cases id
   * @returns 
   */
  resolve(caseId: string): Promise<BaseResponse>;

  /**
   * Escalates an case for a Customer
   * @param caseId for cases id
   * @param caseEscalateOptions for escalate options
   * @returns 
   */
  escalate(caseId: string, caseEscalateOptions: CaseEscalateOptions): Promise<BaseResponse>;

  /**
   * De-escalates an case for a Customer
   * @param caseId for cases id
   * @param caseDeEscalateOptions for de-escalate options
   * @returns 
   */
  deEscalate(caseId: string, caseDeEscalateOptions: CaseDeEscalateOptions): Promise<BaseResponse>;

  /**
   * Cancel an case for a Customer
   * @param caseId for cases id
   * @returns 
   */
  cancel(caseId: string): Promise<BaseResponse>;

  /**
   * Get a collection of case status changes
   * @param caseId for cases id
   * @returns 
   */
  getStatusHistory(caseId: string): Promise<CaseStatusHistoryResponse>;
  
  /**
   * Retrieves a chat history for a closed cases with case id
   * @param caseId for the CaseId
   * @returns 
   */
  getChatHistory(caseId: string): Promise<CaseChatHistoryResponse>;
}
