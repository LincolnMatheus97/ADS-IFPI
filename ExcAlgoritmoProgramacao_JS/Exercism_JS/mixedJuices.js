// @ts-check
//
// The line above enables type checking for this file. Various IDEs interpret
// the @ts-check directive. It will give you helpful autocompletion when
// implementing this exercise.

/**
 * Determines how long it takes to prepare a certain juice.
 *
 * @param {string} name
 * @returns {number} time in minutes
 */
export function timeToMixJuice(name) {
    let timeMix = 0;
    switch(name) {
      case 'Pure Strawberry Joy':
        timeMix = 0.5;
        break;
      case 'Energizer':
      case 'Green Garden':
        timeMix = 1.5;
        break;
      case 'Tropical Island':
        timeMix = 3.0;
        break;
      case 'All or Nothing':
        timeMix = 5.0;
        break;
      default:
        timeMix = 2.5;
        break;
    }
    return timeMix;

  }
  
  /**
   * Calculates the number of limes that need to be cut
   * to reach a certain supply.
   *
   * @param {number} wedgesNeeded
   * @param {string[]} limes
   * @returns {number} number of limes cut
   */
  export function limesToCut(wedgesNeeded, limes) {
    let myArr = limes;
    let totalLimes = 0;
    let totalWedges = 0
    
      while(totalLimes < myArr.length && totalWedges < wedgesNeeded) {
      switch(myArr[totalLimes]) {
        case 'small':
          totalWedges += 6;
          break;
        case 'medium':
          totalWedges += 8;
          break;
        case 'large':
          totalWedges += 10;
          break;
      }
      totalLimes++;
    }
    return totalLimes;

  }
  
  /**
   * Determines which juices still need to be prepared after the end of the shift.
   *
   * @param {number} timeLeft
   * @param {string[]} orders
   * @returns {string[]} remaining orders after the time is up
   */
  export function remainingOrders(timeLeft, orders) {
    let arr = orders;
  
    while(timeLeft > 0) {
      timeLeft = timeLeft - timeToMixJuice(arr[0]);
      arr.shift();
      
    }
    return arr;
    
  }