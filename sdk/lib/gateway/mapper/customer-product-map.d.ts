import { CustomerProductSummary } from '../../core/entity';
import { CustomerProductSummaryModel } from '../../core/models';
export declare class CustomerProductMap {
    static fromBTProducts(model?: CustomerProductSummaryModel): CustomerProductSummary;
    static toBTProducts(model?: CustomerProductSummary): CustomerProductSummaryModel;
}
