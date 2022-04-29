const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  let dom = domains.map((el) => el.split('.').reverse());
  let array = [];
  for (let i = 0; i < dom.length; i++) {
    let x = '';
    for (let j = 0; j < dom[i].length; j++) {
      if (dom[i][j]) {
        x = x+ ('.'+ dom[i][j])
        array.push(x)};
    }
  }
  let result = array.reduce((obj, elem) => {
    obj[elem] = (obj[elem] || 0) + 1
    return obj
  }, {});
  return result
  throw new NotImplementedError('Not implemented');
}

module.exports = {
  getDNSStats
};
