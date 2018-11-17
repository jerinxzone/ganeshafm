const Discord = require("discord.js");
const ffmpeg = require("ffmpeg-binaries");
const opusscript = require("opusscript");

exports.run = (client, message, args) => {
  
  if (args.length === 0)
  return message.reply("Mana Nama Radionya");

    const prambors = "http://masima.rastream.com/masima-pramborsjakarta?";
	const patria = "http://www.radiopatria.net:8000/stream";
	const gen = "http://streaming.sim-indonesia.com:8000/genfm";
	const gensby = "http://streaming.sim-indonesia.com:8000/gensby";
	const wijaya = "http://wijayafm.onlivestreaming.net:9880/stream?type=http&nocache=1417884";
	const giri = "http://streaming.girifm.com:8010/;";
	const swaragama = "http://jkt.jogjastreamers.com:8000/swaragama456789stereo";
	const hardrock = "http://cloudstreaming.mramedia.com:8001/live";
	const indika = "http://103.16.199.177:9160/;stream.nsv";
	const mendhut = "http://streaming.mendhutfm.com:8790/stream?";
	
	
      if((message.content == "!r prambors") || (message.content == "!r prambors fm") || (message.content == "!r pramborsfm") || (message.content == "!r prambors jakarta")) {
        message.member.voiceChannel.join()
          .then(connection => {
            message.reply('Connected! Playing PRAMBORSFM JAKARTA..');
            connection.playArbitraryInput(`${prambors}`);
          })
          .catch(console.log);
      }

	else if((message.content == "!r gen") || (message.content == "!r genfm") || (message.content == "!r genfm jakarta")|| (message.content == "!r gen fm")){
        message.member.voiceChannel.join()
          .then(connection => {
            message.reply('Connected! Playing GENFM JAKARTA..');
            connection.playArbitraryInput(`${gen}`);
          })
          .catch(console.log);
      }

	  	else if((message.content == "!r gensby") || (message.content == "!r gen sby") || (message.content == "!r genfm surabaya")|| (message.content == "!r gen surabaya")|| (message.content == "!r genfm sby")){
        message.member.voiceChannel.join()
          .then(connection => {
            message.reply('Connected! Playing GENFM SURABAYA..');
            connection.playArbitraryInput(`${gensby}`);
          })
          .catch(console.log);
      }
	  
	  	else if((message.content == "!r wijaya") || (message.content == "!r wijayafm") || (message.content == "!r wijayafm surabaya")|| (message.content == "!r wijaya fm")){
        message.member.voiceChannel.join()
          .then(connection => {
            message.reply('Connected! Playing WIJAYAFM SURABAYA..');
            connection.playArbitraryInput(`${gen}`);
          })
          .catch(console.log);
      }
	  
	  
	  	else if((message.content == "!r giri") || (message.content == "!r girifm") || (message.content == "!r girifm gresik")|| (message.content == "!r giri fm")){
        message.member.voiceChannel.join()
          .then(connection => {
            message.reply('Connected! Playing GIRIFM GRESIK..');
            connection.playArbitraryInput(`${giri}`);
          })
          .catch(console.log);
      }
	  
	  
	  	else if((message.content == "!r swaragama") || (message.content == "!r swaragama jogja") || (message.content == "!r swaragamafm")|| (message.content == "!r swaragama fm")){
        message.member.voiceChannel.join()
          .then(connection => {
            message.reply('Connected! Playing SWARAGAMA JOGJAKARTA..');
            connection.playArbitraryInput(`${swaragama}`);
          })
          .catch(console.log);
      }
	  
	  	else if((message.content == "!r hardrock") || (message.content == "!r hardrock fm") || (message.content == "!r hardrockfm")|| (message.content == "!r hardrock jakarta")){
        message.member.voiceChannel.join()
          .then(connection => {
            message.reply('Connected! Playing Hard Rock FM - Jakarta..');
            connection.playArbitraryInput(`${hardrock}`);
          })
          .catch(console.log);
      }
	  
	  	  	else if((message.content == "!r indika") || (message.content == "!r indika fm") || (message.content == "!r indikafm")|| (message.content == "!r radio indika")){
        message.member.voiceChannel.join()
          .then(connection => {
            message.reply('Connected! Playing INDIKA FM..');
            connection.playArbitraryInput(`${indika}`);
          })
          .catch(console.log);
      }
	  
	  	  	  	else if((message.content == "!r mendhut") || (message.content == "!r mendhut fm") || (message.content == "!r mendhutfm")|| (message.content == "!r radio mendhut")){
        message.member.voiceChannel.join()
          .then(connection => {
            message.reply('Connected! Playing MENDHUT FM..');
            connection.playArbitraryInput(`${mendhut}`);
          })
          .catch(console.log);
      }
	  
	  
	  	  	  	  	else if((message.content == "!r patria") || (message.content == "!r patria fm") || (message.content == "!r patriafm")|| (message.content == "!r radio patria")){
        message.member.voiceChannel.join()
          .then(connection => {
            message.reply('Connected! Playing PATRIA FM BLITAR..');
            connection.playArbitraryInput(`${patria}`);
          })
          .catch(console.log);
      }
	  
	  
	  else {
        message.reply('Nama Radio Salah');
      }
    };
  

Kamu tidak berada di voice channel
