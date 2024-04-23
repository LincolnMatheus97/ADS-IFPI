// @ts-check
//
// The line above enables type checking for this file. Various IDEs interpret
// the @ts-check directive. It will give you helpful autocompletion when
// implementing this exercise.

/**
 * Calculates the total bird count.
 *
 * @param {number[]} birdsPerDay
 * @returns {number} total bird count
 */
export function totalBirdCount(birdsPerDay) {
    let arr = birdsPerDay;
    let total = 0;
    for(let i = 0; i < arr.length; i++) {
      total += arr[i];
    }
    return total;

  }
  
  /**
   * Calculates the total number of birds seen in a specific week.
   *
   * @param {number[]} birdsPerDay
   * @param {number} week
   * @returns {number} birds counted in the given week
   */
  export function birdsInWeek(birdsPerDay, week) {
    let arr = birdsPerDay;
    let total = 0;
    let startIndex = (week - 1) * 7;
    let endIndex = startIndex + 7;
    for(let i = startIndex; i < endIndex; i++) {
      total += arr[i];
    }
    return total;

  }
  
  
  /**
   * Fixes the counting mistake by increasing the bird count
   * by one for every second day.
   *
   * @param {number[]} birdsPerDay
   * @returns {number[]} corrected bird count data
   */
  export function fixBirdCountLog(birdsPerDay) {
    let arr = birdsPerDay;
    for(let i = 0; i < arr.length; i++) {
      if(i % 2 === 0) {
        arr[i]++;
      } else {
        arr[i]
      }
    }
    return arr;

  }