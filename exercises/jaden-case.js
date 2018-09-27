'use strict'

/*
 * Jaden Smith Case
 *
 * Make a `jadenCase` function that takes a string as parameter
 * and return the string with each words capitilized.
 *
 * Example : "How are you ?" -> "How Are You ?"
 *
 */



function jadenCase(str) {
   let string = str.toLowerCase().split(' ');
   for (let i = 0; i < splitStr.length; i++)
   {
		string[i] = string[i].charAt(0).toUpperCase() + string[i].substring(1);     
   } 
}
return("");

//* Begin of tests
const assert = require('assert')

assert.fail('You must write your own tests')
// End of tests */
