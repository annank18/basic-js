const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
const chainMaker = {
  arr: [],
  getLength() {
    //throw new NotImplementedError('Not implemented');
      return arr.length;
  },
  addLink(value) {
    //throw new NotImplementedError('Not implemented');
    if (value !== undefined) {
      this.arr.push(value);
      return this;
    } else {
      this.arr.push(`'(  )'`);
      return this;
    }
  },
  removeLink(position) {
    //throw new NotImplementedError('Not implemented');
    let num = position - 1;
		if (num >= 0 && num < this.arr.length - 1 && Number.isInteger(num)) {
			this.arr.splice(num, 1);
			return this;
		} else {
			this.arr = [];
			throw new Error('You can\'t remove incorrect link!');
		}
  },
  reverseChain() {
    //throw new NotImplementedError('Not implemented');
    this.arr.reverse();
    return this;
  },
  finishChain() {
    //throw new NotImplementedError('Not implemented');
    const result = this.arr.map(item => `( ${item} )`);
		this.arr = [];
		return result.join('~~');
  }
};

module.exports = {
  chainMaker
};
