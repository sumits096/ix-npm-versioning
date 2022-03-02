import { BaseResponse } from '../../entity';
import { RepositoryInterface } from './repository-interface';

/**
 * Defines methods defination for customer to request boomtown api's.
 */
export interface CustomerRepositoryInterface extends RepositoryInterface<BaseResponse> {}
