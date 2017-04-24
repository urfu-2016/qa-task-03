const assert = require('assert');
const getPokerHand = require('../getPokerHand');

describe('getPokerHand', () => {
    it('should return `Покер` for [1, 1, 1, 1, 1]', () => {
        const actual = getPokerHand([1, 1, 1, 1, 1]);

        assert.equal(actual, 'Покер');
    });

    it('should return `Каре` for [1,1,1,1,2]', () => {
        const actual = getPokerHand([1,1,1,1,2]);
        
        assert.equal(actual, 'Каре');
    });
    
    it('should return `Фулл Хаус` for [1,1,1,2,2]', () => {
        const actual = getPokerHand([1,1,1,2,2]);
        
        assert.equal(actual, 'Фулл Хаус');
    });
    
    it('should return `Тройка` for [1,1,1,2,3]', () => {
        const actual = getPokerHand([1,1,1,2,3]);
        
        assert.equal(actual, 'Тройка');
    });
    
    it('should return `Две пары` for [1,1,2,2,3]', () => {
        const actual = getPokerHand([1,1,2,2,3]);
        
        assert.equal(actual, 'Две пары');
    });
    
    it('should return `Пара` for [1,1,2,3,4]', () => {
        const actual = getPokerHand([1,1,2,3,4]);
        
        assert.equal(actual, 'Пара');
    });
    
    it('should return `Наивысшее очко` for [1,2,3,4,5]', () => {
        const actual = getPokerHand([1,2,3,4,5]);
        
        assert.equal(actual, 'Наивысшее очко');
    });
    
    it('should return `Длина входного массива должна быть равна 5` for [1,2,3,4,5,6]', () => {
        const actual = () => getPokerHand([1,2,3,4,5,6]);
        
        assert.throws(actual, /Длина входного массива должна быть равна 5/);
    });
    
    it('should return `Элементы массива должна быть числами в интервале от 1 до 6` for [1,2,3,4,7]', () => {
        const actual = () => getPokerHand([1,2,3,4,7]);
        
        assert.throws(actual, /Элементы массива должна быть числами в интервале от 1 до 6/);
    });
    
    it('should return `На вход должен подаваться массив` for "hello"', () => {
        const actual = () => getPokerHand("hello");
        
        assert.throws(actual, /На вход должен подаваться массив/);
    });
    
    it('should return `Элементами массива должны быть числа` for [1,2,3,4,"h"]', () => {
        const actual = () => getPokerHand([1,2,3,4,"h"]);
        
        assert.throws(actual, /Элементами массива должны быть числа/);
    });
    // Напишите тесты на ваш замечательный код здесь
});
