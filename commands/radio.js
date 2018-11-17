const config = require('../config.json');

exports.run = (client, message, args) => {

return message.reply(`\n${config.prefix}Radio - Daftar Radio\n\nprambors\ngen\ngensby\nwijaya\ngiri\nswaragama\nhardrock\nindika\nmendhut\npatria\nwijangsongko\nistara\nardan\nmatrix\ndjfm\nrdi\nmayangkara\n\nCara Play - !r <nama radio>`)

}
