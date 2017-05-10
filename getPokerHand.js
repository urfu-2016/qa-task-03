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
        if (!(1 <= dice[i] && dice[i] <= 6))
            throw new Error("Dice contains value not from range 1..6");
    }
}
 
function getPokerHand(dice) {
    checkDiceCorrect(dice);
    // Напишите ваш замечательный код здесь
    //TODO: check dice correctness
    if (hasEqualValues(dice))
        return 'Покер';
    if (splitDice(dice, 4, dice => true))
        return 'Каре';
    if (splitDice(dice, 3, dice => hasEqualValues(dice)))
        return 'Фулл хаус';
    if (splitDice(dice, 3, dice => true))
        return 'Тройка';
    if (splitDice(dice, 2, dice => splitDice(dice, 2, dice => true) ))
        return 'Две пары';
    if (splitDice(dice, 2, dice => true))
        return 'Пара';
    return 'Наивысшее очко';
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
