import { describe, it, expect, beforeAll } from '@jest/globals';
import { Customer } from '../../src/api/controllers/customer';
import { CustomerService } from '../../src/core/services/customer-service';
import { jest } from '@jest/globals';
import { AxiosHandler } from '../../src/gateway/request-handler';
import { BoomtownClient } from '../../src/gateway/client/boomtown-client';
import { CustomerRepository } from '../../src/gateway/repositories';
import axios from 'axios';
import { customerCreateOrUpdateMock, customerDeleteMock, customerGetAllMock, customerGetByIdMock, customerSmsInviteMock } from '../mocks/customer-mock';
import { createInvalidSmsInvitePayload, createPayload, createSmsInvitePayload, updatePayload } from '../mock-data/customer-data';

jest.mock('axios');
let customer: Customer;

beforeAll(async () => {
    customer = new Customer(new CustomerService(new CustomerRepository(new BoomtownClient(new AxiosHandler()))));
});

describe('Customer', () => {
    describe('Get All', () => {
        it('should be return collection of customer', async () => {
            // given
            customerGetAllMock();

            // when
            const result = await customer.get();

            // then
            expect(axios.request).toHaveBeenCalled();
            expect(result.totalCount).toEqual(108);
            expect(result.success).toEqual(true);
        });

        it('should be return collection of 10 customer', async () => {
            // given
            customerGetAllMock(0, 10);

            // when
            const result = await customer.get({ start: 0, limit: 10 });

            // then
            expect(result.totalCount).toEqual(108);
            expect(axios.request).toHaveBeenCalled();
            expect(result.success).toEqual(true);
            if (result.results) {
                expect(result.results.length).toEqual(10);
            }
        });
    });

    describe('Get By Id', () => {
        it('should be return customer object', async () => {
            // given
            customerGetByIdMock('2S6SZX');

            // when
            const result = await customer.getById('2S6SZX');

            // then
            expect(axios.request).toHaveBeenCalled();
            expect(result.success).toEqual(true);
            expect(result.totalCount).toEqual(108);
            if (result.results) {
                expect(result.results.length).toEqual(1);
            }
        });

        it('should be return FileNotFoundException', () => {
            // given
            customerGetByIdMock('2S6SZXq');

            // when
            const result = customer.getById('2S6SZXq');

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

    describe('Create or Update', () => {
        it('should be return created customer object', async () => {
            // given
            customerCreateOrUpdateMock(createPayload);

            // when
            const result = await customer.post(createPayload);

            // then
            expect(axios.request).toHaveBeenCalled();
            expect(result.success).toEqual(true);
            expect(result.totalCount).toEqual(1);
            if (result.results) {
                expect(result.results.customer.id).toBeTruthy();
            }
        });

        it('should be return updated customer object', async () => {
            // given
            customerCreateOrUpdateMock(updatePayload);

            // when
            const result = await customer.post(createPayload);

            // then
            expect(axios.request).toHaveBeenCalled();
            expect(result.success).toEqual(true);
            expect(result.totalCount).toEqual(1);
            if (result.results) {
                expect(result.results.customer.id).toBeTruthy();
                expect(result.results.customer.id).toBe(updatePayload.customer.id);
            }
        });

        it('should be return FileNotFoundException', async () => {
            // given
            customerCreateOrUpdateMock(updatePayload);

            // when
            const result = customer.post(createPayload);

            // then
            expect(axios.request).toHaveBeenCalled();
            result.then(
                (_) => {},
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
            customerDeleteMock('2S6SZX');

            // when
            const result = await customer.delete('2S6SZX');

            // then
            expect(axios.request).toHaveBeenCalled();
            expect(result.success).toEqual(true);
        });

        it('should be return FileNotFoundException', () => {
            // given
            customerDeleteMock('2S6SZXs');

            // when
            const result = customer.delete('2S6SZXs');

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

    describe('SMS Invite', () => {
        it('should be return created customer object', async () => {
            // given
            customerSmsInviteMock(createSmsInvitePayload);

            // when
            const result = await customer.smsInvite(createSmsInvitePayload);

            // then
            expect(axios.request).toHaveBeenCalled();
            expect(result.success).toEqual(true);
            if (result) {
                expect(result.customerId).toBeTruthy();
                expect(result.inviteId).toBeTruthy();
            }
        });

        it('should be return UserInputException', () => {
            // given
            customerSmsInviteMock(createInvalidSmsInvitePayload);

            // when
            const result = customer.smsInvite(createInvalidSmsInvitePayload);

            // then
            result.then(
                (_) => { },
                (error: any) => {
                    expect(axios.request).toHaveBeenCalled();
                    expect(error.success).toEqual(false);
                    expect(error.errorType).toEqual('UserInputException');
                },
            );
        });
    });
});
