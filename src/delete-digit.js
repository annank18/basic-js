const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  let result = [];
  let NewNumber = n.toString().split('');
	for (let i = 0; i < NewNumber.length; i++) {
		let x = NewNumber.slice();
		x.splice(i, 1);
		result.push(x.join(''));
    //console.log (result);
	}
    result.sort((a, b) => b - a);
    return +result[0];
  throw new NotImplementedError('Not implemented');
}

module.exports = {
  deleteDigit
};
