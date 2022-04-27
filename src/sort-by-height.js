const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
  let result = arr.filter(item => item !== -1).sort((a, b) => a - b);
  let newArr = [];
  arr.map(item => {
    newArr.push(item);
    if (item !== -1) {
      newArr.pop(item);
      newArr.push(+result.splice(0, 1).join());
    }
  })
   return newArr
  throw new NotImplementedError('Not implemented');
}

module.exports = {
  sortByHeight
};
