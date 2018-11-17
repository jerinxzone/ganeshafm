const Discord = require("discord.js");
const bot = new Discord.Client();
const config = require('../config.json');

exports.run = (client) => {
    console.log(`[Radio-Streaming-Bot] Bot ready in ${client.guilds.size} server(s).`);
    console.log(`[Radio-Streaming-Bot] Playing with ${client.users.size} users.`);
    console.log(`[Radio-Streaming-Bot] Bot Invite: https://discordapp.com/api/oauth2/authorize?client_id=${client.user.id}&permissions=8&scope=bot`);
  }

bot.on("ready", () => {
  bot.user.setActivity("Playing Radio Indonesia GaneshaFM");
}
