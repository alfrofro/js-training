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
function get (key)
let sourceObjectKeys = Object.keys(sourceObject)
{
	if (sourceObject.keys === 'num')
	{
		return(sourceObject.num)
	}

	else if (sourceObject.keys === 'bool')
	{
		return(sourceObject.bool)
	}

	else if (sourceObject.keys === 'str')
	{
		return(sourceObject.str)
	}

	else if (sourceObject.keys === 'log')
	{
		return(sourceObject.log)
	}

	else if (sourceObject.keys === 'noexist')
	{
		return(sourceObject.noexist)
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
