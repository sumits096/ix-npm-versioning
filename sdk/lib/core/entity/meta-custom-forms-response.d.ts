import { BaseResponse, CustomForm } from '.';
export interface MetaCustomFormsResponse extends BaseResponse {
    results: CustomForm[];
}
