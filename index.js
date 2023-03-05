/* Библиотеки */
const TelegramApi = require('node-telegram-bot-api')
const moment = require('moment');

const token = '6235361103:AAFU32FwWrWXcQgBSsjO0euV8QyarsqOb_g'

const bot = new TelegramApi(token, {polling: true})

const start = () => {
    bot.on('message', async msg => {
        const text = msg.text;
        const chatId = msg.chat.id;
    
        if (text === '/start') {
            await bot.sendMessage(chatId, 'Ну привет айтишник');
            await bot.sendSticker(chatId, 'https://tlgrm.eu/_/stickers/ea5/382/ea53826d-c192-376a-b766-e5abc535f1c9/192/11.webp');
        }
    })    
}


start()