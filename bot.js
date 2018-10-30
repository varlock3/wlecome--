client.on("guildMemberAdd", (m) => {
m.guild.channels.get("505538581566193686").send("هاي")
})
client.login(process.env.BOT_TOKEN);
