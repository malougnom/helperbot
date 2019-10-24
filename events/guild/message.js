const { prefix } = require("../../assets/config.json")
module.exports = async (bot, message) => {
    bot.on("message", async message => {
        if(message.author.bot || message.channel.type === "dm") return;

        let args = message.content.slice(prefix.length).trim().split(/ +/g)
        let cmd = args.shift().toLowerCase()
    
        if(!message.content.startsWith(prefix)) return;
        let commandfile = bot.commands.get(cmd) || bot.commands.get(bot.aliases.get(cmd))
        if(commandfile) commandfile.run(bot, message, args)
    })
}