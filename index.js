console.log("Bonjour");

let { Botkit } = require("botkit");

const controller = new Botkit();

controller.hears("hello", "direct_message", function (bot, message) {
  bot.reply(message, "Hello yourself!");
});

controller.hears("hello", "message", async (bot, message) => {
  // do something!
  await bot.reply(message, "Hello human");
});
