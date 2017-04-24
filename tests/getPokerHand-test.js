const assert = require('assert');
const getPokerHand = require('../getPokerHand');

describe('getPokerHand', () => {
  it('should return `Error` for empty arguments', () => {
    const actual = () => getPokerHand();

    assert.throws(actual, 'You must provide array as a first argument of getPokerHand function');
  })

  it('should return `Error` for non array arguments', () => {
    const actual = () => getPokerHand(null);

    assert.throws(actual, 'You must provide array as a first argument of getPokerHand function');
  })

  it('should return `Error` for array with larger length', () => {
    const actual = () => getPokerHand([1, 2, 3, 4, 5, 6]);

    assert.throws(actual, 'Dices array must content 5 elements');
  })

  it('should return `Error` for array with smaller length', () => {
    const actual = () => getPokerHand([1, 2, 3, 4]);

    assert.throws(actual, 'Dices array must content 5 elements');
  })

  it('should return `Error` for array with non integer dice values', () => {
    const actual = () => getPokerHand([1, 2, 3, 4, undefined]);

    assert.throws(actual, 'Dice mist be an integer');
  })

  it('should return `Error` for array with dice values < 1', () => {
    const actual = () => getPokerHand([1, 2, 3, 4, -5]);

    assert.throws(actual, 'Dice can only have 1, 2, 3, 4, 5, 6 values');
  })

  it('should return `Error` for array with dice values > 6', () => {
    const actual = () => getPokerHand([1, 2, 3, 4, 10]);

    assert.throws(actual, 'Dice can only have 1, 2, 3, 4, 5, 6 values');
  })

  it('should return `Покер` for [1, 1, 1, 1, 1]', () => {
    const actual = getPokerHand([1, 1, 1, 1, 1]);

    assert.equal(actual, 'Покер');
  });

  it('should return `Каре` for [1, 1, 1, 1, 2]', () => {
    const actual = getPokerHand([1, 1, 1, 1, 2]);

    assert.equal(actual, 'Каре');
  });

  it('should return `Фулл хаус` for [1, 1, 1, 2, 2]', () => {
    const actual = getPokerHand([1, 1, 1, 2, 2]);

    assert.equal(actual, 'Фулл хаус');
  });

  it('should return `Тройка` for [1, 1, 1, 2, 3]', () => {
    const actual = getPokerHand([1, 1, 1, 2, 3]);

    assert.equal(actual, 'Тройка');
  });

  it('should return `Две пары` for [1, 1, 2, 2, 3]', () => {
    const actual = getPokerHand([1, 1, 2, 2, 3]);

    assert.equal(actual, 'Две пары');
  });

  it('should return `Пара` for [1, 1, 2, 3, 4]', () => {
    const actual = getPokerHand([1, 1, 2, 3, 4]);

    assert.equal(actual, 'Пара');
  });

  it('should return `Наивысшее очко` for [1, 2, 3, 4, 5]', () => {
    const actual = getPokerHand([1, 2, 3, 4, 5]);

    assert.equal(actual, 'Наивысшее очко');
  });
});
