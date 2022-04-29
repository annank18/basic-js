const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an email address, return it's domain.
 *
 * @param {String} email
 * @return {String}
 *
 * @example
 * For the input 'prettyandsimple@example.com', the output should be 'example.com'
 *
 */

 function getEmailDomain(email, substr){
  substr = '@'
  let listIdx = []
  let lastIndex = -1
  while ((lastIndex = email.indexOf(substr, lastIndex + 1)) !== -1) {
    listIdx.push(lastIndex);
  }
  return email.slice ((listIdx[listIdx.length-1])+1);
  throw new NotImplementedError('Not implemented');
}


module.exports = {
  getEmailDomain
};
