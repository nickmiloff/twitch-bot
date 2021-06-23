'use strict';

{
  const {load} = require(`./backend.js`);

  const STREAMER_ID = `416467128`;

  const getEmotes = (id = STREAMER_ID) => {
    const Url = {
      BTTV: `https://api.betterttv.net/3/cached/users/twitch/${id}`,
      FRANK: `https://api.betterttv.net/3/cached/frankerfacez/users/twitch/${id}`
    };

    const pushingEmotes = (emotes, arr) => {
      for (const emote of emotes) {
        if (!arr.includes(emote.code)) {
          arr.push(emote.code);
        }
      }
    };

    return new Promise((resolve, reject) => {
      const resultArr = [];

      const bttvPromise = load(Url.BTTV)
        .then((response) => {
          pushingEmotes(response.sharedEmotes, resultArr);
        });

      const frankPromise = load(Url.FRANK)
        .then((response) => {
          pushingEmotes(response, resultArr);
        });

      Promise.all([bttvPromise, frankPromise])
       .then(() => {
         resolve(resultArr.join(` `));
       })
       .catch((errorMessage) => {
         reject(errorMessage);
       });
    });
  };

  module.exports = {
    getEmotes
  };
}
