import cjs_bytes from './cjs/bytes.js';
import { base64Decode } from './base64.js';

const res = base64Decode(cjs_bytes/* bytes */.bytes, new Uint8Array(cjs_bytes/* lenIn */.lenIn));

// console.log(cjs_bytes.bytes[cjs_bytes.bytes.length-2], cjs_bytes.bytes[cjs_bytes.bytes.length-1]);
console.log("last out values: ", res[res.length-2], res[res.length-1], res[res.length]);