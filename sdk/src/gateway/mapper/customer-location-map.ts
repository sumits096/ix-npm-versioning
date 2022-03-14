import 'automapper-ts';
import { CustomerContactMap, CustomerFormsMap, CustomerMap, CustomerProductMap, UploadFilesMap } from '.';
import {
    CustomerLocation,
    CustomerLocationCreateRequest,
    CustomerLocationCreateResponse,
    CustomerLocationMetadata,
    CustomerLocationResponse,
    CustomerTuple,
} from '../../core/entity';
import {
    CustomerLocationCreateRequestModel,
    CustomerLocationCreateResponseModel,
    CustomerLocationMetadataModel,
    CustomerLocationModel,
    CustomerLocationResponseModel,
} from '../../core/models';

export class CustomerLocationMap {
    /**
     * Return api response model
     * @param responseModel customer location response model
     * @returns
     */
    static responseCustomerLocationMapper(responseModel: CustomerLocationResponseModel): CustomerLocationResponse {
        const list = responseModel.results;
        const location = list.map(function transform(customer: CustomerLocationModel) {
            return CustomerLocationMap.fromBTCustomerLocation(customer);
        });

        automapper
            .createMap('BTCustomerLocationResponse', 'CustomerLocationResponse')
            .forMember('currentServerTime', (opts: AutoMapperJs.IMemberConfigurationOptions) =>
                opts.mapFrom('current_server_time'),
            )
            .forMember('results', location);

        return automapper.map(
            'BTCustomerLocationResponse',
            'CustomerLocationResponse',
            responseModel,
        ) as CustomerLocationResponse;
    }

    /**
     * Return entity customer location from boomtown model
     * @param model boomtown customer location model.
     * @returns
     */
    static fromBTCustomerLocation(model: CustomerLocationModel): CustomerLocation {
        automapper
            .createMap('BTCustomerLocation', 'CustomerLocation')
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
            .forMember('products', CustomerProductMap.fromBTProducts(model.products));

        return automapper.map('BTCustomerLocation', 'CustomerLocation', model) as CustomerLocation;
    }

    /**
     * Return entity customer location metadata from boomtown model
     * @param metadata boomtown customer location metadata model.
     * @returns
     */
    static fromBTMetadataValues(model?: CustomerLocationMetadataModel): CustomerLocationMetadata {
        automapper
            .createMap('BTCustomerLocationMetaData', 'CustomerLocationMetaData')
            .forMember('locationProductsNotes', (opts: AutoMapperJs.IMemberConfigurationOptions) =>
                opts.mapFrom('location_products_notes'),
            )
            .forMember('uniqueAspectsThatAffectConnectivity', (opts: AutoMapperJs.IMemberConfigurationOptions) =>
                opts.mapFrom('unique_aspects_that_affect_connectivity'),
            )
            .forMember('terminalIdentificationNumber', (opts: AutoMapperJs.IMemberConfigurationOptions) =>
                opts.mapFrom('terminal_identification_number'),
            );

        return automapper.map(
            'BTCustomerLocationMetaData',
            'CustomerLocationMetaData',
            model,
        ) as CustomerLocationMetadata;
    }

    /**
     * Return boomtown customer location request model from entity customer location model
     * @param model customer entity model.
     * @returns
     */
    static toBTCreateRequestModel(model: CustomerLocationCreateRequest): CustomerLocationCreateRequestModel {
        automapper
            .createMap('CustomerLocationCreate', 'BTCustomerLocationCreate')
            .forMember('customer_location', CustomerLocationMap.toBTCustomerLocation(model.customerLocation));

        return automapper.map(
            'CustomerLocationCreate',
            'BTCustomerLocationCreate',
            model,
        ) as CustomerLocationCreateRequestModel;
    }

    /**
     * Return boomtown customer location model from entity customer location model
     * @param model entity customer location model.
     * @returns
     */
    static toBTCustomerLocation(model: CustomerLocation): CustomerLocationModel {
        automapper
            .createMap('CustomerLocation', 'BTCustomerLocation')
            .forMember('customer_id', (opts: AutoMapperJs.IMemberConfigurationOptions) => opts.mapFrom('customerId'))
            .forMember('street_1', (opts: AutoMapperJs.IMemberConfigurationOptions) => opts.mapFrom('street1'))
            .forMember('street_2', (opts: AutoMapperJs.IMemberConfigurationOptions) => opts.mapFrom('street2'))
            .forMember('site_name', (opts: AutoMapperJs.IMemberConfigurationOptions) => opts.mapFrom('siteName'))
            .forMember('org_team_ids', (opts: AutoMapperJs.IMemberConfigurationOptions) => opts.mapFrom('orgTeamIds'))
            .forMember('external_id', (opts: AutoMapperJs.IMemberConfigurationOptions) => opts.mapFrom('externalId'))
            .forMember('merchant_ids', (opts: AutoMapperJs.IMemberConfigurationOptions) => opts.mapFrom('merchantIds'))
            .forMember('custom_forms', CustomerFormsMap.toBCustomFormsDataList(model.customForms))
            .forMember('files', UploadFilesMap.toBTUploadFileModel(model.files))
            .forMember('metadata_values', CustomerLocationMap.toBTCustomerLocationMetaData(model.metadataValues))
            .forMember('products', CustomerProductMap.toBTProducts(model.products));

        return automapper.map('CustomerLocation', 'BTCustomerLocation', model) as CustomerLocationModel;
    }

    /**
     * Return boomtown customer location model from entity customer location model
     * @param model entity customer location model.
     * @returns
     */
    static toBTCustomerLocationMetaData(model: CustomerLocationMetadata): CustomerLocationMetadataModel {
        automapper
            .createMap('CustomerLocationMetaData', 'BTCustomerLocationMetaData')
            .forMember('location_products_notes', (opts: AutoMapperJs.IMemberConfigurationOptions) =>
                opts.mapFrom('locationProductsNotes'),
            )
            .forMember('unique_aspects_that_affect_connectivity', (opts: AutoMapperJs.IMemberConfigurationOptions) =>
                opts.mapFrom('uniqueAspectsThatAffectConnectivity'),
            )
            .forMember('terminal_identification_number', (opts: AutoMapperJs.IMemberConfigurationOptions) =>
                opts.mapFrom('terminalIdentificationNumber'),
            );

        return automapper.map(
            'CustomerLocationMetaData',
            'BTCustomerLocationMetaData',
            model,
        ) as CustomerLocationMetadataModel;
    }

    /**
     * Return api response model
     * @param responseModel
     * @returns
     */
    static customerLocationCreateResponse(responseModel: CustomerLocationCreateResponseModel): CustomerLocationCreateResponse {
        const tuple = responseModel.results;
        const model: CustomerTuple = {} as CustomerTuple;
        model.customer = CustomerMap.fromBTCustomer(tuple.customer);
        model.customerContact = CustomerContactMap.fromBTCustomerContact(tuple.customer_user);
        model.customerLocation = CustomerLocationMap.fromBTCustomerLocation(tuple.customer_location);

        automapper
            .createMap('BTCustomerLocationCreateResponse', 'CustomerLocationCreateResponse')
            .forMember('currentServerTime', (opts: AutoMapperJs.IMemberConfigurationOptions) =>
                opts.mapFrom('current_server_time'),
            )
            .forMember('results', model);

        return automapper.map(
            'BTCustomerLocationCreateResponse',
            'CustomerLocationCreateResponse',
            responseModel,
        ) as CustomerLocationCreateResponse;
    }
}
