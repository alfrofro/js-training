'use strict'

/*
 * Create a function `multiply` that takes two number arguments
 * and returns the result of the multiplication of those two.
 * But you must do this without using the operators * or /
 *
 * @notions Primitive and Operators, Functions, While
 */

// Your code :
function multiply(argu1, argu2)
{
	if (argu2 === 0 || argu1 === 0)
	{
		return 0;
	}

	let resultat = 0;

	if (argu1 > 0 && argu2 > 0 || argu1 > 0 && argu2 < 0)
	{
		for (let i = 0; i < argu1; i++)
		{
			resultat += argu2
		}
		return resultat;
	}
	
	for (let j = 0; j > argu1; j--)
	{
		resultat += -argu2;
	}
	return resultat;	
}
//* Begin of tests
const assert = require('assert')

assert.strictEqual(typeof multiply, 'function')
assert.strictEqual(multiply.length, 2)
assert.strictEqual(multiply.toString().includes('Math.imul'), false)
assert.strictEqual(multiply.toString().includes('*'), false)
assert.strictEqual(multiply.toString().includes('/'), false)
assert.strictEqual(multiply(34, 78), 2652)
assert.strictEqual(multiply(123, 0), 0)
assert.strictEqual(multiply(0, -230), 0)
assert.strictEqual(multiply(0, 0), 0)
assert.strictEqual(multiply(123, -22), -2706)
assert.strictEqual(multiply(-22, 123), -2706)
assert.strictEqual(multiply(-22, -123), 2706)
// End of tests */
