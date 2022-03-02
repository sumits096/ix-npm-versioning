import { BaseError } from '../../core/entity';
import { BaseErrorModel } from '../../core/models';

export class ErrorMap {
    /**
     * Return error response from boomtown error model
     * @param errorModel for error model
     * @returns
     */
    static error(errorModel: BaseErrorModel): BaseError {
        automapper
            .createMap('BTError', 'Error')
            .forMember('currentServerTime', (opts: AutoMapperJs.IMemberConfigurationOptions) =>
                opts.mapFrom('current_server_time'),
            );

        return automapper.map('BTError', 'Error', errorModel) as BaseError;
    }
}
