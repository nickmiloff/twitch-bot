'use strict';

{
  const tmi = require(`tmi.js`);
  const { getDaysToNY } = require(`./modules/timers.js`);
  const { getWeather } = require(`./modules/weather.js`);
  const { getEmotes } = require(`./modules/bttv.js`);
  const { getRandomInt, getRandomElem } = require(`./modules/utils.js`)

  const opts = {
      identity: {
        username: `nikitkerbot`,
        password: `oauth:wzvo2738wfkgczxrklxrovlt0h9ir7`
      },
      channels: [
          `nikitker`,
          `exseven777`,
          `mimblvimbll`
      ]
  };
  const Templates = {
    JOKE: `Чат, я все понимаю, пошутили и хватит... Уже не смешно чат... Рофл зашел слишком далеко... Топ 10 пранков вышедших из под контроля...
    `,
    PHONK: `Чат, опять этот фонк слушать... А затем темы из игр... А затем Даб Степ... А затем Английский реп... А затем ещё пороется в своем мусоре и поставит трешачок чат
    `,
    THIRTY: `Чат, да я в свои 13 лет, прошел все игры на макс сложности, да я пздц че сделал для мира в целом, я столько игр с торрента скачал, я мастер этого мира, пруфов не будет...`
  };
  const Commands = {
    '!шутка': {
      props: false,
      context: false,
      func: ([target]) => {
        sendMessage(target, Templates.JOKE);
      }
    },
    '!фонк': {
      props: false,
      context: false,
      func: ([target]) => {
        sendMessage(target, Templates.PHONK);
      }
    },
    '!13': {
      props: false,
      context: false,
      func: ([target]) => {
        sendMessage(target, Templates.THIRTY);
      }
    },
    '!нг': {
      props: false,
      context: false,
      func: ([target]) => {
        sendMessage(target, `До НГ осталось ${getDaysToNY()}!`);
      }
    },
    '!погода': {
      props: true,
      context: false,
      func: ([target, cityName]) => {
        const weatherPromise = getWeather(cityName);

        weatherPromise
        .then((weatherObj) => {
          const message = `Погода в городе ${weatherObj.name}: температура ${weatherObj.temp}°, по ощущениям ${weatherObj.feelsLike}° - ${weatherObj.description}, ветер ${weatherObj.wind} м/с.`

          sendMessage(target, message);
        })
        .catch((error) => {
          console.log(error);
        });
      }
    },
    '!bttv': {
      props: false,
      context: false,
      func: ([target]) => {
        const emotePromise = getEmotes();

        emotePromise
        .then((emotesMessage) => {
          const message = `${emotesMessage} Видишь текст вместо смайликов? Установи BTTV Plugin - betterttv.com`
          sendMessage(target, message);
        })
        .catch((error) => {
          console.log(error);
        });
      }
    },
    '!пипка': {
      props: false,
      context: true,
      func: ([target, context]) => {
        const vipList = {
          'nikitker': getRandomInt(20, 40),
          'ExSeven777': getRandomInt(20, 40)
        };
        const value = vipList[context['display-name']] || getRandomInt(0, 40);

        const message = `/me у ${context['display-name']} пипка длинной ${value}см`;
        sendMessage(target, message);
      }
    },
    '!шанс': {
      props: true,
      context: true,
      func: ([target, context, prop]) => {
        const message = `/me у ${context['display-name']} шанс ${prop} ${getRandomInt(0, 100)}%`
        sendMessage(target, message);
      }
    },
    '!icq': {
      props: false,
      context: true,
      func: ([target, context]) => {
        const value = getRandomInt(0, 225);
        const emote = value < 20 ? `2Head` : `EZ`; 

        const message = `/me у ${context['display-name']} ${value}icq ${emote}`;
        sendMessage(target, message);
      }
    },
    '!вопрос': {
      props: true,
      context: true,
      func: ([target, context, prop]) => {
        const values = [
          `да VoteYea`,
          `нет VoteNay `,
          `может быть CoolStoryBob но это не точно KEKW`,
          `KEKW -> KEKWait абсолютно точно нет`
        ]

        const message = `/me ${context['display-name']} Ответ на вопрос: "${prop}" ${getRandomElem(values)}`;
        sendMessage(target, message);
      }
    },
    '!nice': {
      props: false,
      context: false,
      func: ([target]) => {
        sendMessage(target, `/me Nice driving! monkaSTEER`);
      }
    },
    '!инфа': {
      props: false,
      context: true,
      func: ([target, context]) => {
        sendMessage(target, `/me Полная информация о пользователе ${context['display-name']}. Возраст: ${getRandomInt(0, 100)} лет, icq: ${getRandomInt(0, 225)}, пипка: ${getRandomInt(0, 40)}см...`);
      }
    },
    '!лучше': {
      props: true,
      context: true,
      func: ([target, context]) => {
        sendMessage(target, `${context['display-name']} определённо ${getRandomInt(1, 2)} вариант лучше BloodTrail`);
      }
    },
    '!крутить': {
      props: false,
      context: true,
      func: ([target, context]) => {
        spinCasino([target, context]);
      }
    },
  }

  const spinCasino = ([target, context]) => {
    const values = [
      `KEKW`,
      `Pepega`,
      `peepoClap`,
      `EZ`,
      `gachiHYPER`,
      `2Head`,
      `peepoClown`
    ]

    const v1 = getRandomElem(values);
    const v2 = getRandomElem(values);
    const v3 = getRandomElem(values);
    const v4 = getRandomElem(values);
    const v5 = getRandomElem(values);

    const av = new Set([v1, v2, v3, v4, v5]);

    let ms = ``;
    
    switch (av.size) {
      case 1:
        ms = `Ультра Вери Найс. Легчайшие 5 из 5 EZ Clap @ExSeven777 выдай VIP`;
        break;
      case 2:
        ms = `Ультра Найс. Только 2 уникальных смайлика в роле EZ`;
        break;
      case 3:
        ms = `Найс. Не куш, но все равно круто BloodTrail`;
        break;
      case 4:
        ms = `Если бы ты ставил, ты бы ушел в минус KEKW`;
        break;
      default:
        ms = `Не ходи в казино KEKWait`;
        break;
    }

    sendMessage(target, `${context['display-name']} крутит слоты... Результат: ${v1} - ${v2} - ${v3} - ${v4} - ${v5} ${ms}`);
  }

  const sendMessage = (target, message) => {
    const messageArr = message.trim().split(`/n`);

    for (const message of messageArr) {
      client.say(target, message);
    }
  }

  const onMessageHandler = (target, context, msg, self) => {
    if (self) { return; }

    if (context[`custom-reward-id`] && context[`custom-reward-id`] === `89d76632-65f3-4e72-b9d8-71697625cf8f`) {
      spinCasino([target, context]);
    }

    const requestArr = msg.trim().split(` `);
    const commandName = requestArr[0];
    const commandProps = requestArr.slice(1).join(` `);
    const currentCommand = Commands[commandName];

    if (currentCommand) {
      const args = [target];

      if (currentCommand.context) {
        args.push(context);
      }

      if (currentCommand.props && commandProps) {
        args.push(commandProps);
        currentCommand.func(args)
      }

      if (!currentCommand.props && !commandProps) {
        currentCommand.func(args)
      }
    }
  }

  const onConnectedHandler = (addr, port) => {
    console.log(`* Connected to ${addr}:${port}`);
  }

  // setInterval(() => {
  //   Commands[`!bttv`].func([`#exseven777`]);
  // }, 2400000);

  const client = new tmi.client(opts);

  client.on(`message`, onMessageHandler);
  client.on(`connected`, onConnectedHandler);

  client.connect();
}
