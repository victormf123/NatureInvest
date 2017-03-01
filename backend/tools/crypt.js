/**
 * Created by bruno on 08/10/16.
 */
const Crypto = require('crypto');
const key         = 'L:AKSFHL@JRHQHFSAHf9ashfa9FHPQ@FH';
const algorithm   = 'sha1';

exports.createHash = createHash;

function createHash(data){
    hmac = Crypto.createHmac(algorithm, key);
    hmac.setEncoding('hex');
    hmac.write(data);
    hmac.end();
    return hmac.read();
}