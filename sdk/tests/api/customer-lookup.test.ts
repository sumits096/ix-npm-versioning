import { jest } from '@jest/globals';
import { describe, it, expect, beforeAll } from '@jest/globals';
import axios from 'axios';
import { CustomerLookup } from '../../src/api/controllers';
import { CustomerLookupService } from '../../src/core/services';
import { BoomtownClient } from '../../src/gateway/client/boomtown-client';
import { CustomerLookupRepository } from '../../src/gateway/repositories';
import { AxiosHandler } from '../../src/gateway/request-handler';
import { customerLookupGetByEmailMock, customerLookupGetByExternalIdMock, customerLookupGetByIdMock, customerLookupGetByIssueIdMock } from '../mocks/customer-lookup-mock';

jest.mock('axios');
let customerLookup: CustomerLookup;

beforeAll(async () => {
    customerLookup = new CustomerLookup(new CustomerLookupService(new CustomerLookupRepository(new BoomtownClient(new AxiosHandler()))));
});

describe('CustomerLookup', () => {

    describe('Get By Id', () => {
        it('should be return customer lookup object', async () => {
            // given
            customerLookupGetByIdMock('C8J8AE-UEU');

            // when
            const result = await customerLookup.getLookupById('C8J8AE-UEU');

            // then
            expect(axios.request).toHaveBeenCalled();
            expect(result.success).toEqual(true);
            expect(result.totalCount).toEqual(1);
            if (result.results) {
                expect(result.results).not.toBeNull;
            }
        });

        it('should be return FileNotFoundException', () => {
            // given
            customerLookupGetByIdMock('2S6SZXq');

            // when
            const result = customerLookup.getLookupById('2S6SZXq');

            // then
            result.then(
                (_) => { },
                (error: any) => {
                    expect(axios.request).toHaveBeenCalled();
                    expect(error.success).toEqual(false);
                    expect(error.errorType).toEqual('FileNotFoundException');
                },
            );
        });
    });

    describe('Get By Email', () => {
        it('should be return customer lookup object', async () => {
            // given
            customerLookupGetByEmailMock('123abc@boop.com');

            // when
            const result = await customerLookup.getLookupByEmail('123abc@boop.com');

            // then
            expect(axios.request).toHaveBeenCalled();
            expect(result.success).toEqual(true);
            expect(result.totalCount).toEqual(1);
            if (result.results) {
                expect(result.results).not.toBeNull;
            }
        });

        it('should be return FileNotFoundException', () => {
            // given
            customerLookupGetByEmailMock('123@boop.com');

            // when
            const result = customerLookup.getLookupByEmail('123@boop.com');

            // then
            result.then(
                (_) => { },
                (error: any) => {
                    expect(axios.request).toHaveBeenCalled();
                    expect(error.success).toEqual(false);
                    expect(error.errorType).toEqual('FileNotFoundException');
                },
            );
        });
    });

    describe('Get By External Id', () => {
        it('should be return customer lookup object', async () => {
            // given
            customerLookupGetByExternalIdMock('C8J8AE-00Y');

            // when
            const result = await customerLookup.getLookupByExternalId('C8J8AE-00Y');

            // then
            expect(axios.request).toHaveBeenCalled();
            expect(result.success).toEqual(true);
            expect(result.totalCount).toEqual(1);
            if (result.results) {
                expect(result.results).not.toBeNull;
            }
        });

        it('should be return FileNotFoundException', () => {
            // given
            customerLookupGetByExternalIdMock('C8J8AE-YYY');

            // when
            const result = customerLookup.getLookupByExternalId('C8J8AE-YYY');

            // then
            result.then(
                (_) => { },
                (error: any) => {
                    expect(axios.request).toHaveBeenCalled();
                    expect(error.success).toEqual(false);
                    expect(error.errorType).toEqual('FileNotFoundException');
                },
            );
        });
    });

    describe('Get By Issue Id', () => {
        it('should be return customer lookup object', async () => {
            // given
            customerLookupGetByIssueIdMock();

            // when
            const result = await customerLookup.getLookupByIssueId('0059b314-44e7-4f1f-a3dc-8046ac5388d4');

            // then
            expect(axios.request).toHaveBeenCalled();
            expect(result.success).toEqual(true);
            expect(result.totalCount).toEqual(1);
            if (result.results) {
                expect(result.results).not.toBeNull;
            }
        });

        it('should be return FileNotFoundException', () => {
            // given
            customerLookupGetByIssueIdMock();

            // when
            const result = customerLookup.getLookupByIssueId('0059b314-44e7-4f1f-0000-8046ac5388d4');

            // then
            result.then(
                (_) => { },
                (error: any) => {
                    expect(axios.request).toHaveBeenCalled();
                    expect(error.success).toEqual(false);
                    expect(error.errorType).toEqual('FileNotFoundException');
                },
            );
        });
    });

});
