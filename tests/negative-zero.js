const assert = require('assert');
const accounting = require('../accounting.js');

// Formatting numbers that round to zero should not include a negative sign
assert.strictEqual(accounting.formatNumber(-0.001, 0), '0');
assert.strictEqual(accounting.formatNumber(-0.001, 2), '0.00');

// formatMoney should also drop the negative sign when rounded value is zero
assert.strictEqual(accounting.formatMoney(-0.001), '$0.00');
assert.strictEqual(accounting.formatMoney(-0.001, {precision: 2}), '$0.00');

console.log('negative zero tests passed');

