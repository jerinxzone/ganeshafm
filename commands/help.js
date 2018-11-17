const config = require('../config.json');

exports.run = (client, message, args) => {

return message.reply(`\n${config.prefix}Help - Displays Help Menu\n${config.prefix}Radio - DAFTAR RADIO\n${config.prefix}r <nama radio> - Joins And Plays A Radio Stream\n${config.prefix}Leave - Stop Radio.\n${config.prefix}Prefix <New Prefix> - Sets New Prefix. **[BOT OWNER ONLY${config.prefix}]**`)

}
