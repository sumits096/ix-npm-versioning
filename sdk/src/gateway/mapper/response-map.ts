import { BaseResponse } from '../../core/entity';
import { BaseResponseModel } from '../../core/models';

export class ResponseMap {
    /**
     * Return response from boomtown response model
     * @param model for response model
     * @returns
     */
    static response(model: BaseResponseModel): BaseResponse {
        automapper
            .createMap('BTResponse', 'Response')
            .forMember('currentServerTime', (opts: AutoMapperJs.IMemberConfigurationOptions) =>
                opts.mapFrom('current_server_time'),
            );

        return automapper.map('BTResponse', 'Response', model) as BaseResponse;
    }
}
