import 'reflect-metadata';
import { Customer } from './api/controllers/customer'; 
import { CustomerService } from './core/services/customer-service';
import { BoomtownClient } from './gateway/client/boomtown-client';
import { CustomerRepository } from './gateway/repositories';

export const BoomtownProviders = (token: string, secret: string) => {
    new Credential().setTokenSecret(token, secret);
    return [
        { provide: Customer, deps: [CustomerService] },
        { provide: CustomerService, deps: [CustomerRepository] },
        { provide: CustomerRepository, deps: [BoomtownClient] },
    ];
};

export class Credential {
    static token: string = '3256754';
    static secret: string = '';
    setTokenSecret(token: string, secret: string) {
        Credential.token = token;
        Credential.secret = secret;
    }
}
