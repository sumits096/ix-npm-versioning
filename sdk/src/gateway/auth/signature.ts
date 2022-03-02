import { enc, HmacSHA256 } from 'crypto-js';
import { Credential } from '../..';

class Signature {
    /**
     * Returns a authentication hmac signature
     * @param url for request url.
     * @param timestamp for date time stamp
     * @param queryParam for query parameters
     */
    public create(url: string, timestamp: Date, queryParam?: string): string {
        const urlStr = new URL(url);
        const message = `${urlStr.pathname}?${
            queryParam ? queryParam + '&' : ''
        }_=${timestamp.getTime()}:${timestamp.toJSON()}`;

        return HmacSHA256(message, Credential.secret).toString(enc.Base64);
    }
}

export const signature = new Signature();
