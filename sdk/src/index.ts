import 'reflect-metadata';
import { Customer } from './api/controllers';
import { CustomerService } from './core/services';
import { BoomtownClient } from './gateway/client/boomtown-client';
import { CustomerRepository } from './gateway/repositories';
import { AxiosHandler } from './gateway/request-handler';

export const BoomtownProviders = (token: string, secret: string) => {
    new Credential().setTokenSecret(token, secret);
    return [
        AxiosHandler,
        { provide: Customer, deps: [CustomerService] },
        { provide: CustomerService, deps: [CustomerRepository] },
        { provide: CustomerRepository, deps: [BoomtownClient] },
        { provide: BoomtownClient, deps: [AxiosHandler] },
    ];
};

export class Credential {
    static token: string = '';
    static secret: string = '';
    setTokenSecret(token: string, secret: string) {
        Credential.token = token;
        Credential.secret = secret;
        console.log(token);
    }
}

// const result = new Customer(new CustomerService(new CustomerRepository(new BoomtownClient(new AxiosHandler()))));

// result.get().then(res => {
//     try {
//         console.log('Customers    ' + JSON.stringify(res));
//     }
//     catch (error) {
//         console.log((error as Error).message);
//     }
// }).catch((error) => {
//     console.error(error);
// });
