import 'reflect-metadata';
import { Customer } from './api/controllers';
import { CustomerService } from './core/services';
import { BoomtownClient } from './gateway/client/boomtown-client';
import { CustomerRepository } from './gateway/repositories';
import { AxiosHandler } from './gateway/request-handler';

export const BoomtownProviders = (token: string, secret: string) => {
    new Credential().setTokenSecret(token, secret);
    return [
        { provide: Customer, useClass: [CustomerService] },
        { provide: CustomerService, useClass: [CustomerRepository] },
        { provide: CustomerRepository, useClass: [BoomtownClient] },
        { provide: BoomtownClient, useClass: [AxiosHandler] },
    ];
};

export class Credential {
    static token: string = '';
    static secret: string = '';
    setTokenSecret(token: string, secret: string) {
        Credential.token = token;
        Credential.secret = secret;
    }
}
