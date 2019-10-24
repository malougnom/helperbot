module.exports = (bot) => {
    let promt = process.openStdin()
    promt.addListener("data", res => {
        let x = res.toString().trim().split(/ +/g)
        bot.channels.get("617378784257114112").send(x.join(" "));
    })
}