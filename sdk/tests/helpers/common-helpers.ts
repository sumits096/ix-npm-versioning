export function generateId() {
    const crypto = require('crypto');
    return crypto.randomBytes(3).toString('hex');
}

export function digitsOnly(string:string) {
    return /^\d+$/.test(string);
}
