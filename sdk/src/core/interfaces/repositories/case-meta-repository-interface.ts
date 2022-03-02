import { EnumerationItemResponse } from '../../entity';

/**
 * Defines methods defination for case meta status, meta jobs and meta categories to request boomtown api's.
 *
 * @interface CaseMetaRepositoryInterface
 */
export interface CaseMetaRepositoryInterface {
    /**
     * Return dictionary mapping Status keys to their labels.
     */
    getStatuses(): Promise<EnumerationItemResponse>;

    /**
     * Return dictionary mapping jobs keys to their labels.
     */
    getJobs(): Promise<EnumerationItemResponse>;

    /**
     * Return dictionary mapping categories keys to their labels.
     */
    getCategories(): Promise<EnumerationItemResponse>;

    /**
     * Return dictionary mapping categories new keys to their labels.
     */
    getCategoriesNew(): Promise<EnumerationItemResponse>;

    /**
     * Return dictionary mapping tags keys to their labels.
     */
    getTags(): Promise<EnumerationItemResponse>;

    /**
     * Return dictionary mapping types keys to their labels.
     */
    getTypes(): Promise<EnumerationItemResponse>;

    /**
     * Return dictionary mapping file tags keys to their labels.
     */
    getFileTags(): Promise<EnumerationItemResponse>;

    /**
     * Return dictionary mapping resolutions keys to their labels.
     */
    getResolutions(): Promise<EnumerationItemResponse>;
}
