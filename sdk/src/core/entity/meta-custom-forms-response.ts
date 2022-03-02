import { BaseResponse, CustomForm } from '.';

/**
 *
 * @BoomtownApi
 */
export interface MetaCustomFormsResponse extends BaseResponse {
    results: CustomForm[]
}
