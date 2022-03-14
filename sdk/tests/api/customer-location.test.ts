import { describe, it, expect, beforeAll } from '@jest/globals';
import { CustomerLocation } from '../../src/api/controllers';
import { CustomerLocationService } from '../../src/core/services';
import { jest } from '@jest/globals';
import { AxiosHandler } from '../../src/gateway/request-handler';
import { BoomtownClient } from '../../src/gateway/client/boomtown-client';
import { CustomerLocationRepository } from '../../src/gateway/repositories';
import axios from 'axios';
import { getCustomerMetaStatusMock, getCustomerLocationByIdMock, customerLocationDeleteMock, customerLocationCreateOrUpdateMock, getContactByCustomerLocationIdMock, getCustomerLocationLookupByExternalId } from '../mocks/customer-location-mock'
import { customerLocationCreatePayLoad, customerLocationUpdatePayLoad, customerLocationUpdateWithValidPayLoad } from '../mock-data/customer-location-data';

jest.mock('axios');
let customerLocation: CustomerLocation;
const customerId = '86CW23';
const invalidCustomerId = '86CW2x3';
const customerLocationId = '86CW23-D5W';
const externalId = '86CW23-1234';

beforeAll(async () => {
    customerLocation = new CustomerLocation(new CustomerLocationService(new CustomerLocationRepository(new BoomtownClient(new AxiosHandler()))));
});

describe('CustomerLocation', () => {

    describe('Get by Customer Id', () => {
        it('should be return valid response', async () => {
            // given
            getCustomerLocationByIdMock(customerId);

            // when
            const result = await customerLocation.getByCustomerId(customerId);

            // then
            expect(axios.request).toHaveBeenCalled();
            expect(result.success).toEqual(true);
            expect(result.totalCount).toEqual(1);
            if (result.results) {
                expect(result.results.length).toEqual(1);
            }
        });

        it('should be return error response', () => {
            // given
            getCustomerLocationByIdMock(invalidCustomerId);

            // when
            const result = customerLocation.getByCustomerId(invalidCustomerId);

            // then
            result.then(
                () => { },
                (error: any) => {
                    expect(axios.request).toHaveBeenCalled();
                    expect(error.success).toEqual(false);
                    expect(error.errorType).toEqual('FileNotFoundException');
                },
            );
        });
    });

    describe('Create or Update', () => {
        it('should be return created customer location object', async () => {
            // given
            customerLocationCreateOrUpdateMock(customerLocationCreatePayLoad);

            // when
            const result = await customerLocation.post(customerLocationCreatePayLoad);

            // then
            expect(axios.request).toHaveBeenCalled();
            expect(result.success).toEqual(true);
            expect(result.totalCount).toEqual(1);
            if (result.results) {
                expect(result.results[0].id).toBeTruthy();
            }
        });

        it('should be return updated customer location object', async () => {
            // given
            customerLocationCreateOrUpdateMock(customerLocationUpdatePayLoad);

            // when
            const result = await customerLocation.post(customerLocationUpdatePayLoad);

            // then
            expect(axios.request).toHaveBeenCalled();
            expect(result.success).toEqual(true);
            expect(result.totalCount).toEqual(1);
            if (result.results) {
                expect(result.results[0].id).toBeTruthy();
                expect(result.results[0].customerId).toBe(customerLocationUpdatePayLoad.customerLocation.customerId);
            }
        });

        it('should be return FileNotFoundException', async () => {
            // given
            customerLocationCreateOrUpdateMock(customerLocationUpdateWithValidPayLoad);

            // when
            const result = customerLocation.post(customerLocationCreatePayLoad);

            // then
            expect(axios.request).toHaveBeenCalled();
            result.then(
                () => { },
                (error: any) => {
                    expect(error.success).toEqual(false);
                    expect(error.errorType).toEqual('FileNotFoundException');
                    expect(error.message).toEqual('No match found for customer id/external_id parameter');
                },
            );
        });
    });

    describe('Delete', () => {
        it('should be return success', async () => {
            // given
            customerLocationDeleteMock(customerLocationId);

            // when
            const result = await customerLocation.delete(customerLocationId);

            // then
            expect(axios.request).toHaveBeenCalled();
            expect(result.success).toEqual(true);
        });

        it('should be return FileNotFoundException', () => {
            // given
            customerLocationDeleteMock(customerLocationId);

            // when
            const result = customerLocation.delete(customerLocationId);

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

    describe('Get Customer Location Lookup', () => {
        it('should be return valid response', async () => {
            // given
            getCustomerLocationLookupByExternalId(externalId);
            // when
            const result = await customerLocation.getByExternalId(externalId);
            // then
            expect(axios.request).toHaveBeenCalled();
            expect(result.success).toEqual(true);
            expect(result.totalCount).toEqual(1);
            if (result.results) {
                expect(result.results.length).toEqual(1);
            }
        });
        
        it('should be return error response', () => {
            // given
            getCustomerLocationLookupByExternalId(externalId);
            // when
            const result = customerLocation.getByExternalId(externalId);
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

    describe('Get Contact by CustomerLocation', () => {
        it('should be return valid response', async () => {
            // given
            getContactByCustomerLocationIdMock(customerId, customerLocationId);

            // when
            const result = await customerLocation.getContactByCustomerId(customerId, customerLocationId);

            // then
            expect(axios.request).toHaveBeenCalled();
            expect(result.success).toEqual(true);
            expect(result.totalCount).toEqual(2);
            if (result.results) {
                expect(result.results.length).toEqual(2);
            }
        });

        it('should be return error response', () => {
            // given
            getContactByCustomerLocationIdMock(customerId, customerLocationId);

            // when
            const result = customerLocation.getContactByCustomerId(customerId, customerLocationId);

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

    describe('Get Customer Location Meta Status', () => {
        it('should be return valid response', async () => {
            // given
            getCustomerMetaStatusMock();

            // when
            const result = await customerLocation.getMetaStatus();

            // then
            expect(axios.request).toHaveBeenCalled();
            expect(result.success).toEqual(true);
            expect(result.totalCount).toEqual(1);
        });
    });
});
