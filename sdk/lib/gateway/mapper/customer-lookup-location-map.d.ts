import 'automapper-ts';
import { CustomerLookupLocation, CustomerLookupLocationMetadata, CustomerTechnologySummary } from '../../core/entity';
import { CustomerLookupLocationMetadataModel, CustomerLookupLocationModel, CustomerTechnologySummaryModel } from '../../core/models';
export declare class CustomerLookupLocationMap {
    static fromBTCustomerLookupLocation(model: CustomerLookupLocationModel): CustomerLookupLocation;
    static fromBTTechnology(model?: CustomerTechnologySummaryModel): CustomerTechnologySummary;
    static fromBTMetadataValues(model?: CustomerLookupLocationMetadataModel): CustomerLookupLocationMetadata;
}
