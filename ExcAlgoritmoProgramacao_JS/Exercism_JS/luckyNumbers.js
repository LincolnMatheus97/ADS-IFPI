// @ts-nocheck

/**
 * Calculates the sum of the two input arrays.
 *
 * @param {number[]} array1
 * @param {number[]} array2
 * @returns {number} sum of the two arrays
 */
export function twoSum(array1, array2) {
    let number1 = parseInt(array1.join(``));
    let number2 = parseInt(array2.join(``));
    let sum = number1 + number2;
    return sum;
  }
  
  /**
   * Checks whether a number is a palindrome.
   *
   * @param {number} value
   * @returns {boolean} whether the number is a palindrome or not
   */
  export function luckyNumber(value) {
    let reverseNumber = value.toString().split(``).reverse();
    let palindrome = ``;
  
    for(let i = 0; i < reverseNumber.length; i++) {
      palindrome += `${reverseNumber[i]}`;
    }
  
    if(palindrome == value) {
      return true;
    }else {
      return false;
    }
  }
  
  /**
   * Determines the error message that should be shown to the user
   * for the given input value.
   *
   * @param {string|null|undefined} input
   * @returns {string} error message
   */
  export function errorMessage(input) {
    if (input === null || input === undefined) {
      return 'Required field';
    }
    if (input === '') {
      return 'Required field';
    }
    if (isNaN(input) || input === '0') {
      return 'Must be a number besides 0';
    }
    return '';
  }