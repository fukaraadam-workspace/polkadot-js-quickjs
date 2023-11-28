"use strict";
// For test problem to throw error, either but it in mjs or use strict
const out = new Uint8Array(2);
console.log("out type: ", typeof out);
out[0]= 10;
out[1] = 11;
console.log("out: ", out);
// Below this will throw error for QuickJS and ignored for other environments
out[2] = 12;
console.log("out length: ", out.length);
console.log("out: ", out);