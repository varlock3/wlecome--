client.on("guildMemberAdd", (m) => {
m.guild.channels.get("497089759831916546").send("** Welcome To Throné**  .")
})
client.login(process.env.BOT_TOKEN);
