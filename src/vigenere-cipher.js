const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */

class VigenereCipheringMachine {
  constructor(directly = true) {
    this.directly = directly;
  }

  encrypt(str, word) {
    if (arguments.length !== 2) throw new Error(`Incorrect arguments!`);
    if(typeof arguments[0] !== 'string' || typeof arguments[1] !== 'string') throw new Error(`Incorrect arguments!`);
    str = str.toUpperCase().split("");
    while (word.length < str.length) {
      word += word;
    }
    word = word.toUpperCase().split("");
    let newStr = "";
    let index = 0;
    for (let i = 0; i < str.length; i++) {
      let numStr = String(str[i]);

      if (numStr.charCodeAt() >= 65 && numStr.charCodeAt() <= 90) {
        numStr = numStr.charCodeAt() - 65;
        let numWord = String(word[i - index]);
        numWord = numWord.charCodeAt() - 65;
        let newNum = 0;
          if (numStr + numWord > 25)
            {newNum = numStr + numWord - 26 + 65}
            else { newNum = numStr + numWord + 65};
        let newLetter = String.fromCharCode(newNum);
        newStr += newLetter;
      } else {
        newStr += numStr;
        index += 1;
      }
    }
    if(this.directly){
      return newStr;
    } else {
      return newStr.split('').reverse().join('')
    }
    
  }
  decrypt(str, word) {
    if (arguments.length !== 2) throw new Error(`Incorrect arguments!`);
    if(typeof arguments[0] !== 'string' || typeof arguments[1] !== 'string') throw new Error(`Incorrect arguments!`);
    str = str.toUpperCase().split("");
    while (word.length < str.length) {
      word += word;
    }
    word = word.toUpperCase().split("");
    let newStr = "";
    let index = 0;

    for (let i = 0; i < str.length; i++) {
      let numStr = String(str[i]);

      if (numStr.charCodeAt() >= 65 && numStr.charCodeAt() <= 90) {
        numStr = numStr.charCodeAt() - 65;
        let numWord = String(word[i - index]);
        numWord = numWord.charCodeAt() - 65;
        let newNum = 0
        if (numStr - numWord < 0)
            {newNum = 26 - (numWord - numStr) + 65}
            else {newNum = numStr - numWord + 65};
        let newLetter = String.fromCharCode(newNum);
        newStr += newLetter;
      } else {
        newStr += numStr;
        index += 1;
      }
    }
    if(this.directly){
      return newStr;
    } else {
      return newStr.split('').reverse().join('')
    }
  }
}

module.exports = {
  VigenereCipheringMachine
};