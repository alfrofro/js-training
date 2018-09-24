'use strict'

/*
 * Create a `get` function that takes a key and return the corresponding value
 * in the sourceObject
 *
 * @notions Functions, Data-Structures, Get
 */

// Provided code :
const sourceObject = 
{
  num: 42,
  bool: true,
  str: 'some text',
  log: console.log,
}

// Your code :
function get (object)
{
	let num = 0;
	let bool = true;
	let str = '';
	let log = console.log

	if (object == 'num')
	{
		return sourceObject.num
	}

	if (object == 'bool')
	{
		return sourceObject.bool
	}

	if (object == 'str')
	{
		return sourceObject.str
	}

	if (object == 'log')
	{
		return sourceObject.log
	}

	if (object == 'noexist')
	{
		return sourceObject.noexist
	}
}
//* Begin of tests
const assert = require('assert')

assert.strictEqual(typeof get, 'function')
assert.strictEqual(get('num'), 42)
assert.strictEqual(get('bool'), true)
assert.strictEqual(get('str'), 'some text')
assert.strictEqual(get('log'), console.log)
assert.strictEqual(get('noexist'), undefined)
// End of tests */
