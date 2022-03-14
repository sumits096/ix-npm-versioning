import { Inject, Injectable } from '@nestjs/common';
import { EnumerationItemResponse } from '../entity';
import { CaseMetaRepositoryInterface } from '../interfaces/repositories/case-meta-repository-interface';
import { CaseMetaServiceInterface } from '../interfaces/services/case-meta-service-interface';

/**
 * case meta service
 * @description Provide methods for case meta endpoints.
 *
 * @BoomtownSDK
 */
@Injectable()
export class CaseMetaService implements CaseMetaServiceInterface {
    constructor(@Inject('CaseMetaRepository') protected readonly caseMetaRepository: CaseMetaRepositoryInterface) {}

    /**
     * Return dictionary mapping Status keys to their labels.
     * @returns
     */
    getStatuses(): Promise<EnumerationItemResponse> {
        return this.caseMetaRepository.getStatuses();
    }

    /**
     * Return dictionary mapping Jobs keys to their labels.
     * @returns
     */
    getJobs(): Promise<EnumerationItemResponse> {
        return this.caseMetaRepository.getJobs();
    }

    /**
     * Return dictionary mapping Categories keys to their labels.
     * @returns
     */
    getCategories(): Promise<EnumerationItemResponse> {
        return this.caseMetaRepository.getCategories();
    }

    /**
     * Return dictionary mapping Categories New keys to their labels.
     * @returns
     */
    getCategoriesNew(): Promise<EnumerationItemResponse> {
        return this.caseMetaRepository.getCategoriesNew();
    }

    /**
     * Return dictionary mapping Tags keys to their labels.
     * @returns
     */
    getTags(): Promise<EnumerationItemResponse> {
        return this.caseMetaRepository.getTags();
    }

    /**
     * Return dictionary mapping types keys to their labels.
     * @returns
     */
    getTypes(): Promise<EnumerationItemResponse> {
        return this.caseMetaRepository.getTypes();
    }

    /**
     * Return dictionary mapping file tags keys to their labels.
     * @returns
     */
    getFileTags(): Promise<EnumerationItemResponse> {
        return this.caseMetaRepository.getFileTags();
    }

    /**
     * Return dictionary mapping resolutions keys to their labels.
     * @returns
     */
    getResolutions(): Promise<EnumerationItemResponse> {
        return this.caseMetaRepository.getResolutions();
    }
}
