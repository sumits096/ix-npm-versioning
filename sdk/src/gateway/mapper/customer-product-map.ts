import { CustomerProductSummary } from '../../core/entity';
import { CustomerProductSummaryModel } from '../../core/models';

export class CustomerProductMap {
    /**
     * Return entity customer product summary from boomtown model
     * @param model boomtown customer product summary model.
     * @returns
     */
    static fromBTProducts(model?: CustomerProductSummaryModel): CustomerProductSummary {
        automapper
            .createMap('BTCustomerProductSummary', 'CustomerProductSummary')
            .forMember('parentId', (opts: AutoMapperJs.IMemberConfigurationOptions) => opts.mapFrom('parent_id'))
            .forMember('lastChecked', (opts: AutoMapperJs.IMemberConfigurationOptions) => opts.mapFrom('last_checked'))
            .forMember('lastSeen', (opts: AutoMapperJs.IMemberConfigurationOptions) => opts.mapFrom('last_seen'))
            .forMember('lastChanged', (opts: AutoMapperJs.IMemberConfigurationOptions) => opts.mapFrom('last_changed'))
            .forMember('pciCompliant', (opts: AutoMapperJs.IMemberConfigurationOptions) =>
                opts.mapFrom('pci_compliant'),
            );

        return automapper.map('BTCustomerProductSummary', 'CustomerProductSummary', model) as CustomerProductSummary;
    }

    /**
     * Return entity customer product summary from boomtown model
     * @param model boomtown customer product summary model.
     * @returns
     */
    static toBTProducts(model?: CustomerProductSummary): CustomerProductSummaryModel {
        automapper
            .createMap('CustomerProductSummary', 'BTCustomerProductSummary')
            .forMember('parent_id', (opts: AutoMapperJs.IMemberConfigurationOptions) => opts.mapFrom('parentId'))
            .forMember('last_checked', (opts: AutoMapperJs.IMemberConfigurationOptions) => opts.mapFrom('lastChecked'))
            .forMember('last_seen', (opts: AutoMapperJs.IMemberConfigurationOptions) => opts.mapFrom('lastSeen'))
            .forMember('last_changed', (opts: AutoMapperJs.IMemberConfigurationOptions) => opts.mapFrom('lastChanged'))
            .forMember('pci_compliant', (opts: AutoMapperJs.IMemberConfigurationOptions) =>
                opts.mapFrom('pciCompliant'),
            );

        return automapper.map(
            'CustomerProductSummary',
            'BTCustomerProductSummary',
            model,
        ) as CustomerProductSummaryModel;
    }
}
