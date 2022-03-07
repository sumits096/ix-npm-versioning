import 'reflect-metadata';

export const BoomtownProviders = (token: string, secret: string) => {
    new Credential().setTokenSecret(token, secret);
    return [
        // { provide: Customer, deps: [CustomerService] },
        // { provide: CustomerService, deps: [CustomerRepository] },
        // { provide: CustomerRepository, deps: [BoomtownClient] },
        // { provide: BoomtownClient, deps: [AxiosHandler] },
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
