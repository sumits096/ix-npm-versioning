import { BoomtownClient } from '../client/boomtown-client';
import { CustomerMetaRepositoryInterface } from '../../core/interfaces/repositories';
import { HashMapResponse, MetaCustomFormsResponse } from '../../core/entity';
export declare class CustomerMetaRepository implements CustomerMetaRepositoryInterface {
    protected readonly boomtownClient: BoomtownClient;
    private queryParamModel;
    constructor(boomtownClient: BoomtownClient);
    getStatus(): Promise<HashMapResponse>;
    getIndustries(): Promise<HashMapResponse>;
    customForms(orgTeamId: string): Promise<MetaCustomFormsResponse>;
}
