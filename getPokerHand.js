/**
 * Определение комбинации в броске
 *
 * @param {Array} dice пять костей, для которых нужно определить комбинацию
 * @returns {String} название комбинации
 */
 
function checkDiceCorrect(dice) {
    if (!(dice instanceof Array))
        throw new Error("Dice is not an array");
    if (dice.length != 5)
        throw new Error("Dice length is not 5");
    for (var i = 0; i < 5; i++) {
        if (!(Number.isInteger(dice[i])))
            throw new Error("Dice contains non-integer value");
    }
}
 
function getPokerHand(dice) {
    checkDiceCorrect(dice);
    // Напишите ваш замечательный код здесь
    //TODO: check dice correctness
    if (hasPoker(dice))
        return 'Покер';
    if (hasFour(dice))
        return 'Каре';
    if (hasFullHouse(dice))
        return 'Фулл хаус';
    if (hasSet(dice))
        return 'Тройка';
    if (hasTwoPair(dice))
        return 'Две пары';
    if (hasPair(dice))
        return 'Пара';
    return 'Наивысшее очко';
}

function hasPoker(dice) {
    return hasEqualValues(dice);
}

function hasFour(dice) {
    return splitDice(dice, 4, dice => true);
}

function hasFullHouse(dice) {
    return splitDice(dice, 3, dice => hasEqualValues(dice));
}

function hasSet(dice) {
    return splitDice(dice, 3, dice => true);
}

function hasTwoPair(dice) {
    return splitDice(dice, 2, dice => splitDice(dice, 2, dice => true) );
}

function hasPair(dice) {
    return splitDice(dice, 2, dice => true);
}

function hasEqualValues(dice) {
    var dicesValues = dice[0];
    for (var i = 0; i < dice.length; i++) {
        if (dice[i] !== dicesValues)
            return false;
    }
    return true;
}

function getParts(dice, mask) {
    var firstPart = new Array();
    var secondPart = new Array();
    for (var i = 0; i < dice.length; i++) {
        if ((mask & (1 << i)) > 0)
            firstPart.push(dice[i]);
        else
            secondPart.push(dice[i]);
    }
    return [firstPart, secondPart]; //make_pair
}

function bitCount(mask, len) {
    var result = 0;
    for (var i = 0; i < len; i++)
        if ((mask & (1 << i)) > 0)
            result++;
    return result;
}

function splitDice(dice, firstPartLength, isRemainderCorrect) {
    var len = dice.length;
    var result = false;
    for (var mask = 0; mask < (1 << len); mask++) {
        if (bitCount(mask, len) == firstPartLength) {
            var answer = getParts(dice, mask);
            var firstPart = answer[0];
            var secondPart = answer[1];
            result |= hasEqualValues(firstPart) && isRemainderCorrect(secondPart);
        }
    }
    return result;
}

module.exports = getPokerHand;
