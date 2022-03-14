import 'automapper-ts';
import { CustomerFormsMap, UploadFilesMap } from '.';
import { CustomerLookupLocation, CustomerLookupLocationMetadata, CustomerTechnologySummary } from '../../core/entity';
import { CustomerLookupLocationMetadataModel, CustomerLookupLocationModel, CustomerTechnologySummaryModel } from '../../core/models';

export class CustomerLookupLocationMap {


    /**
     * Return entity customer lookup location from boomtown model
     * @param model boomtown customer lookup location model.
     * @returns
     */
     static fromBTCustomerLookupLocation(model: CustomerLookupLocationModel): CustomerLookupLocation {
        automapper
            .createMap('BTCustomerLookupLocation', 'CustomerLookupLocation')
            .forMember('customerId', (opts: AutoMapperJs.IMemberConfigurationOptions) => opts.mapFrom('customer_id'))
            .forMember('street1', (opts: AutoMapperJs.IMemberConfigurationOptions) => opts.mapFrom('street_1'))
            .forMember('street2', (opts: AutoMapperJs.IMemberConfigurationOptions) => opts.mapFrom('street_2'))
            .forMember('siteName', (opts: AutoMapperJs.IMemberConfigurationOptions) => opts.mapFrom('site_name'))
            .forMember('orgTeamIds', (opts: AutoMapperJs.IMemberConfigurationOptions) => opts.mapFrom('org_team_ids'))
            .forMember('externalId', (opts: AutoMapperJs.IMemberConfigurationOptions) => opts.mapFrom('external_id'))
            .forMember('merchantIds', (opts: AutoMapperJs.IMemberConfigurationOptions) => opts.mapFrom('merchant_ids'))
            .forMember('customForms', CustomerFormsMap.fromBTCustomFormsList(model.custom_forms))
            .forMember('custom_forms', (opts: AutoMapperJs.IMemberConfigurationOptions) => opts.ignore())
            .forMember('files', UploadFilesMap.fromBTUploadFilesList(model.files))
            .forMember('metadataValues', this.fromBTMetadataValues(model.metadata_values))
            .forMember('metadata_values', (opts: AutoMapperJs.IMemberConfigurationOptions) => opts.ignore())
            .forMember('technology', this.fromBTTechnology(model.technology));

        return automapper.map('BTCustomerLookupLocation', 'CustomerLookupLocation', model) as CustomerLookupLocation;
    }



    /**
     * Return entity customer technology from boomtown model
     * @param technology boomtown customer technology model.
     * @returns
     */
     static fromBTTechnology(model?: CustomerTechnologySummaryModel): CustomerTechnologySummary {        
        automapper.createMap('BTCustomerTechnologySummary', 'CustomerTechnologySummary');

        return automapper.map(
            'BTCustomerTechnologySummary',
            'CustomerTechnologySummary',
            model,
        ) as CustomerTechnologySummary;
    }



/**
     * Return entity customer lookup location metadata from boomtown model
     * @param metadata boomtown customer lookup location metadata model.
     * @returns
     */
 static fromBTMetadataValues(model?: CustomerLookupLocationMetadataModel): CustomerLookupLocationMetadata {
    automapper
        .createMap('BTCustomerLookupLocationMetaData', 'CustomerLookupLocationMetaData')
        .forMember('locationTechnologyNotes', (opts: AutoMapperJs.IMemberConfigurationOptions) =>
            opts.mapFrom('location_technology_notes'),
        )
        .forMember('uniqueAspectsThatAffectConnectivity', (opts: AutoMapperJs.IMemberConfigurationOptions) =>
            opts.mapFrom('unique_aspects_that_affect_connectivity'),
        )
        .forMember('terminalIdentificationNumber', (opts: AutoMapperJs.IMemberConfigurationOptions) =>
            opts.mapFrom('terminal_identification_number'),
        );

    return automapper.map(
        'BTCustomerLookupLocationMetaData',
        'CustomerLookupLocationMetaData',
        model,
    ) as CustomerLookupLocationMetadata;
}



}
