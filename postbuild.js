const axios = require('axios').default;

const GIFFY_TOKEN = process.env.GIFFY_TOKEN;
const TELEGRAM_BOT_TOKEN = process.env.TELEGRAM_BOT_TOKEN;
const TELEGRAM_CHAT_ID = parseInt(process.env.TELEGRAM_CHAT_ID);

const NEW_VERSION_MESSAGE = 'Новая Версия Гладиатора Загружена! https://gladiator27.herokuapp.com/';

async function getGifUrl() {
  try {
    const res = await axios.get('http://api.giphy.com/v1/gifs/random', {
      params: {
        api_key: GIFFY_TOKEN,
        tag: 'cat'
      },
    });

    return res.data.data.url;
  } catch (e){
    console.log(e);
  }
}

async function sendBotMessage(text) {
  try {
    await axios.post(`https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`, {
      chat_id: TELEGRAM_CHAT_ID,
      text: text,
    });
  } catch (e){
    console.log(e.response.data);
  }
}

async function notifyPostBuild() {
  const gifUrl = await getGifUrl();

  sendBotMessage(gifUrl);
  sendBotMessage(NEW_VERSION_MESSAGE);
}


notifyPostBuild();

