// Code for main bot.
const { Client, Collection } = require("discord.js");
const { token } = require("./assets/config.json")
const bot =  new Client();
// command handler
["commands", "aliases"].forEach(x => bot[x] = new Collection());
["console","command","event"].forEach((x) => {
    console.log(x);
    require(`./handlers/${x}`)(bot)
    })
bot.login(token)