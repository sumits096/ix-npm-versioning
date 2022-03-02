import { Service } from 'typedi';
import { EnumerationItemResponse } from '../../core/entity';
import { CaseMetaServiceInterface } from '../../core/interfaces/services';

@Service()
export class CaseMeta {
    constructor(private readonly caseMetaService: CaseMetaServiceInterface) {}

    /**
     * Returns a dictionary for mapping 'Status' keys to labels on Case objects.
     * @returns
     */
    async statuses(): Promise<EnumerationItemResponse> {
        return this.caseMetaService.getStatuses();
    }

    /**
     * Returns a dictionary for mapping 'jobs' keys to labels on Case objects.
     * @returns
     */
    async jobs(): Promise<EnumerationItemResponse> {
        return this.caseMetaService.getJobs();
    }

    /**
     * Returns a dictionary for mapping 'categories' keys to labels on Case objects.
     * @returns
     */
    async categories(): Promise<EnumerationItemResponse> {
        return this.caseMetaService.getCategories();
    }

    /**
     * Returns a dictionary for mapping 'categories New' keys to labels on Case objects.
     * @returns
     */
    async categoriesNew(): Promise<EnumerationItemResponse> {
        return this.caseMetaService.getCategoriesNew();
    }

    /**
     * Returns a dictionary for mapping 'tags' keys to labels on Case objects.
     * @returns
     */
    async tags(): Promise<EnumerationItemResponse> {
        return this.caseMetaService.getTags();
    }

    /**
     * Returns a dictionary for mapping 'types' keys to labels on Case objects.
     * @returns
     */
    async types(): Promise<EnumerationItemResponse> {
        return this.caseMetaService.getTypes();
    }

    /**
     * Returns a dictionary for mapping 'file tags' keys to labels on Case objects.
     * @returns
     */
    async fileTags(): Promise<EnumerationItemResponse> {
        return this.caseMetaService.getFileTags();
    }

    /**
     * Returns a dictionary for mapping 'resolutions' keys to labels on Case objects.
     * @returns
     */
    async resolutions(): Promise<EnumerationItemResponse> {
        return this.caseMetaService.getResolutions();
    }
}
