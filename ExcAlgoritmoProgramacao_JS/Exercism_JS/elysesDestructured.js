/// </>
// @ts-nocheck

/**
 * Get the first card in the given deck
 *
 * @param {Card[]} deck
 *
 * @returns {Card} the first card in the deck
 */
export function getFirstCard(deck) {
    let [firstCard] = deck;
    return firstCard;
  }
  
  /**
   * Get the second card in the given deck
   *
   * @param {Card[]} deck
   *
   * @returns {Card} the second card in the deck
   */
  export function getSecondCard(deck) {
    let [firstCard, secondCard] = deck;
    return secondCard;
  }
  
  /**
   * Switch the position of the first two cards in the given deck
   *
   * @param {Card[]} deck
   *
   * @returns {Card[]} new deck with reordered cards
   */
  export function swapTopTwoCards(deck) {
    if (deck.length < 2) {
      return deck;
    }
  
    let temp = deck[0];
    deck[0] = deck[1];
    deck[1] = temp;
  
    return deck;
  }
  
  /**
   * Put the top card of the given deck into a separate discard pile
   *
   * @param {Card[]} deck
   *
   * @returns {[Card, Card[]]} the top card of the given
   * deck and a new deck containing all the other cards
   */
  export function discardTopCard(deck) {
    if (deck.length === 0) {
      return [];
    }
    let topCard = deck[0];
    let restOfDeck = deck.slice(1);
  
    return [topCard, restOfDeck];
  }
  
  /** @type {Card[]} **/
  const FACE_CARDS = ['jack', 'queen', 'king'];
  
  /**
   * Insert face cards into the given deck
   *
   * @param {Card[]} deck
   *
   * @returns {Card[]} new deck where the second,
   * third, and fourth cards are the face cards
   */
  export function insertFaceCards(deck) {
    if (deck.length === 0) {
      return [undefined, 'jack', 'queen', 'king'];
    }
    let faceCards = ['jack', 'queen', 'king'];
    return [
      ...deck.slice(0, 1),
      ...faceCards,
      ...deck.slice(1),
    ];
  }