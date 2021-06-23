'use strict';

{
  const {getDeclension} = require(`./utils.js`);

  const MS_IN_DAY = 1000 * 60 * 60 * 24;

  const getDaysToNY = () => {
    const NEW_YEAR = new Date(`2022-01-01T00:00:00`);
    const nowDate = new Date();
    const differentDate = NEW_YEAR - nowDate;
    const resultNumber = Math.ceil(differentDate / MS_IN_DAY);
    const declensionStr = getDeclension(resultNumber, [`день`, `дня`, `дней`]);

    return `${resultNumber} ${declensionStr}`;
  };

  module.exports = {
    getDaysToNY
  };
}
