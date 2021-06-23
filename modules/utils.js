'use strict';

{
  const getRandomInt = (min = 0, max = Number.MAX_SAFE_INTEGER) => {
    const rand = min + Math.random() * (max + 1 - min);
    return Math.floor(rand);
  };

  const getRandomElem = (array) => array[getRandomInt(0, array.length - 1)];

  const shuffleArr = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }

    return array;
  };

  const getDeclension = (number, titles) => {
    const cases = [2, 0, 1, 1, 1, 2];
    return titles[(number % 100 > 4 && number % 100 < 20) ? 2 : cases[(number % 10 < 5) ? number % 10 : 5]];
  };

  module.exports = {
    getRandomElem,
    getRandomInt,
    shuffleArr,
    getDeclension
  };
}
