const config = require('../config.json');

exports.run = (client, message, args) => {

return message.reply(`\n${config.prefix}Radio - Daftar Radio\nprambors\ngen\ngensby\nwijaya\ngiri\nswaragama\nhardrock\nindika\nmendhut\npatria\n\nCara Play - !r <nama radio>`)

}