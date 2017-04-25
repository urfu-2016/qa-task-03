function getPokerHand(dice) {


    if (arguments.length != 1)
        throw new Error('Функция принимает только 1 аргумент')

    validateInp(dice)
    var repetit = getRepetitonsIndexes(dice);
    return getCombiName(repetit);
}

function validateInp(dice){
    if (!Array.isArray(dice))
        throw new Error('Аргумент должен быть массивом');
    if (dice.length != 5)
        throw new Error('Размер массива должен равняться 5');
    dice.forEach(function(number) {
        if (!Number.isInteger(number) || number < 1 || number > 6)
            throw new Error('Элементы массива должны принадлежать множеству {1, 2, 3, 4, 5, 6}');
    })
}

function getRepetitonsIndexes(dice){
    var indexesOfEq = [];
    
    var iterCounter = 0
    for (var i = 0; i < dice.length; i++) {
        if (indexesOfEq[0] != undefined && indexesOfEq[0].includes(i))
            continue;
        if (indexesOfEq[1] != undefined && indexesOfEq[1].includes(i))
            continue;

        for (var j = i+1; j < dice.length; j++) {

            if(dice[i] == dice[j]){
                if (indexesOfEq[iterCounter] == undefined)
                    indexesOfEq[iterCounter] = [];
                indexesOfEq[iterCounter].push(j);
            }

        };
        if (indexesOfEq[iterCounter] != undefined && indexesOfEq[iterCounter].length != 0)
            iterCounter++;
    };

    return indexesOfEq;
}

function getCombiName(repetitionsInds){

    if (repetitionsInds[0] == undefined)
        return 'Наивысшее очко';
    else if (repetitionsInds[1] == undefined || repetitionsInds[1].length == 0) {
        if (repetitionsInds[0].length == 4)
            return 'Покер';
        else if (repetitionsInds[0].length == 3)
            return 'Каре';
        else if (repetitionsInds[0].length == 2)
            return 'Тройка';
        else 
            return 'Пара';
    }
    else {
        if ((repetitionsInds[0].length == 2 && repetitionsInds[1].length == 1) || (repetitionsInds[0].length == 1 && repetitionsInds[1].length == 2))
            return 'Фулл хаус';
        else
            return 'Две пары';
    }
}

module.exports = getPokerHand;
