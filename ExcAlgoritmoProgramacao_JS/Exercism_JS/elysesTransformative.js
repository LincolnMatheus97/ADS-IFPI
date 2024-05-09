// @ts-check

/**
 * Double every card in the deck.
 *
 * @param {number[]} deck
 *
 * @returns {number[]} deck with every card doubled
 */
export function seeingDouble(deck) {
    return deck = deck.map((value) => value * 2);
  }
  
  /**
   *  Creates triplicates of every 3 found in the deck.
   *
   * @param {number[]} deck
   *
   * @returns {number[]} deck with triplicate 3s
   */
  export function threeOfEachThree(deck) {
    for (let i = 0; i < deck.length; i++) {
      if (deck[i] === 3) {
        deck.splice(i + 1, 0, 3, 3);
        i += 2;
      }
    }
    return deck;
  }
  
  /**
   * Extracts the middle two cards from a deck.
   * Assumes a deck is always 10 cards.
   *
   * @param {number[]} deck of 10 cards
   *
   * @returns {number[]} deck with only two middle cards
   */
  export function middleTwo(deck) {
    let middleDeck = deck.slice(4, 6);
    return middleDeck;
  }
  
  /**
   * Moves the outside two cards to the middle.
   *
   * @param {number[]} deck with even number of cards
   *
   * @returns {number[]} transformed deck
   */
  
  export function sandwichTrick(deck) {
    let firstCard = deck.shift();
    let lastCard = deck.pop();
    let middleCard = deck.length / 2;
  
    // @ts-ignore
    deck.splice(middleCard, 0, lastCard, firstCard);
    return deck;
  }
  
  /**
   * Removes every card from the deck except 2s.
   *
   * @param {number[]} deck
   *
   * @returns {number[]} deck with only 2s
   */
  export function twoIsSpecial(deck) {
    let twos = deck.filter(card => card === 2);
    if (twos.length === 0) {
      return [];
    } else {
      return twos.map(two => two);
    }
  }
  
  /**
   * Returns a perfectly order deck from lowest to highest.
   *
   * @param {number[]} deck shuffled deck
   *
   * @returns {number[]} ordered deck
   */
  export function perfectlyOrdered(deck) {
    let sortDeck = deck.sort((card1, card2) => {
      if(card1 < card2) {
        return -1;
      }
      if(card2 > card1) {
        return 1;
      }
      return 0;
    });
    return sortDeck;
  }
  
  /**
   * Reorders the deck so that the top card ends up at the bottom.
   *
   * @param {number[]} deck
   *
   * @returns {number[]} reordered deck
   */
  export function reorder(deck) {
    return deck.reverse();
  }