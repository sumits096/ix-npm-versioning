import { CustomerLocation, CustomerLocationCreateRequest, CustomerLocationCreateResponse, CustomerLocationMetadata, CustomerLocationResponse } from '../../core/entity';
import { CustomerLocationCreateRequestModel, CustomerLocationCreateResponseModel, CustomerLocationMetadataModel, CustomerLocationModel, CustomerLocationResponseModel } from '../../core/models';
export declare class CustomerLocationMap {
    static responseCustomerLocationMapper(responseModel: CustomerLocationResponseModel): CustomerLocationResponse;
    static fromBTCustomerLocation(model: CustomerLocationModel): CustomerLocation;
    static fromBTMetadataValues(model?: CustomerLocationMetadataModel): CustomerLocationMetadata;
    static toBTCreateRequestModel(model: CustomerLocationCreateRequest): CustomerLocationCreateRequestModel;
    static toBTCustomerLocation(model: CustomerLocation): CustomerLocationModel;
    static toBTCustomerLocationMetaData(model: CustomerLocationMetadata): CustomerLocationMetadataModel;
    static customerLocationCreateResponse(responseModel: CustomerLocationCreateResponseModel): CustomerLocationCreateResponse;
}
