// if (Commands[commandName].props) {
    //   Commands[commandName].func(target, commandProps);
    // } else {
    //   Commands[commandName].func(target);
    // }

    // switch (commandName) {
    //   case `!шутка`:
    //     sendMessage(target, Templates.JOKE);
    //     break;
    //   case `!фонк`:
    //     sendMessage(target, Templates.PHONK);
    //     break;
    //   case `!13`:
    //     sendMessage(target, Templates.THIRTY);
    //     break;
    //   case `!нг`:
    //     sendMessage(target, `До НГ осталось ${getDaysToNY()}!`);
    //     break;
    //   case `!погода`:
    //     const cityName = requestArr.slice(1).join(` `);
    //     const weatherPromise = getWeather(cityName);

    //     weatherPromise
    //     .then((weatherObj) => {
    //       const message = `Погода в городе ${weatherObj.name}: температура ${weatherObj.temp}°, по ощущениям ${weatherObj.feelsLike}° - ${weatherObj.description}, ветер ${weatherObj.wind} м/с.`

    //       sendMessage(target, message);
    //     })
    //     .catch((error) => {
    //       console.log(error);
    //     });
    //     break;
    //   case `!bttv`:
    //     const emotePromise = getEmotes();

    //     emotePromise
    //     .then((emotesMessage) => {
    //       const message = `${emotesMessage} Видишь текст вместо смайликов? Установи BTTV Plugin - betterttv.com`
    //       sendMessage(target, message);
    //     })
    //     .catch((error) => {
    //       console.log(error);
    //     });
    //     break;
    // }