/**
 * Определение комбинации в броске
 *
 * @param {Array} dices пять костей, для которых нужно определить комбинацию
 * @returns {String} название комбинации
 */
function getPokerHand(dices) {
  if (!Array.isArray(dices)) {
    throw new Error('You must provide array as a first argument of function');
  }

  if (dices.length !== 5) {
    throw new Error('Array must content 5 elements');
  }

  let countRepeatedHsh = dices.reduce((memo, dice) => {
    if (!Number.isInteger(dice)) {
      throw new Error('Dice mist be an integer');
    }

    if (dice > 6 || dice < 1) {
      throw new Error('Dice can only have 1, 2, 3, 4, 5, 6 values');
    }

    memo[dice] = memo[dice] || 0
    memo[dice]++

    return memo
   }, {});

  let countRepeatedValues = Object.keys(countRepeatedHsh).map((item) => countRepeatedHsh[item]);

  if (countRepeatedValues.includes(5)) {
    return 'Покер';
  } else if (countRepeatedValues.includes(4)) {
    return 'Каре';
  } else if (countRepeatedValues.includes(3) && countRepeatedValues.includes(2)) {
    return 'Фулл хаус';
  } else if (countRepeatedValues.includes(3)) {
    return 'Тройка';
  } else if (countRepeatedValues.includes(2) && countRepeatedValues.length === 3) {
    return 'Две пары';
  } else if (countRepeatedValues.includes(2)) {
    return 'Пара';
  } else {
    return Math.max(...dices);
  }
}

module.exports = getPokerHand;
