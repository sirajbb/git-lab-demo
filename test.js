const assert = require("assert");
const { add, multiply } = require("./calc");
assert.strictEqual(add(2, 3), 5);
assert.strictEqual(multiply(4, 5), 20);
console.log("All tests passed");
