const { Telegraf } = require('telegraf');
const TOKEN = '6010685264:AAHYf1VCga2kyJN1VhpRUwqpnfEuqUjRGcg'
const bot = new Telegraf(TOKEN)

// Команда, которая выполняется вначале, после нажатия кнопки /start ("Текст")
//bot.start((ctx) => ctx.reply("Hi!"));


//Пишем сообщение от его имени (ChatID, "Текст сообщения")
//bot.telegram.sendMessage(1479892307, "А еще я научился от его имени сообщения писать")







// Enable graceful stop
process.once('SIGINT', () => bot.stop('SIGINT'));
process.once('SIGTERM', () => bot.stop('SIGTERM'));

// Аня - 1479892307
// Я - 737782220

bot.launch();