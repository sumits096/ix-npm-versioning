import { describe, it, expect, beforeAll } from '@jest/globals';
import { CustomerMeta } from '../../src/api/controllers/customer-meta';
import { CustomerMetaService } from '../../src/core/services/customer-meta-service';
import { jest } from '@jest/globals';
import { AxiosHandler } from '../../src/gateway/request-handler';
import { BoomtownClient } from '../../src/gateway/client/boomtown-client';
import { CustomerMetaRepository } from '../../src/gateway/repositories';
import axios from 'axios';
import { customerMetaCustomFormsMock, customerMetaIndustriesMock, customerMetaStatusMock } from '../mocks/customer-meta-mock';

jest.mock('axios');
let customerMeta: CustomerMeta;

beforeAll(async () => {
    customerMeta = new CustomerMeta(new CustomerMetaService(new CustomerMetaRepository(new BoomtownClient(new AxiosHandler()))));
});

describe('CustomerMeta', () => {
    describe('Get status', () => {
        it('should be return customer meta statuses', async () => {
            // given
            customerMetaStatusMock();

            // when
            const result = await customerMeta.status();

            // then
            expect(result.totalCount).toEqual(4);
            expect(axios.request).toHaveBeenCalled();
            expect(result.success).toEqual(true);
        });
    });

    describe('Get industries', () => {
        it('should be return customer meta industries', async () => {
            // given
            customerMetaIndustriesMock();

            // when
            const result = await customerMeta.industries();

            // then
            expect(result.totalCount).toEqual(10);
            expect(axios.request).toHaveBeenCalled();
            expect(result.success).toEqual(true);
        });
    });

    describe('Get custom forms', () => {
        it('should be return customer-meta custom form', async () => {
            // given
            customerMetaCustomFormsMock('UZT-LWW');

            // when
            const result = await customerMeta.customForms('UZT-LWW');

            // then
            expect(result.totalCount).toEqual(1);
            expect(axios.request).toHaveBeenCalled();
            expect(result.success).toEqual(true);
        });
    });
});
