const Discord = require("discord.js");
const ffmpeg = require("ffmpeg-binaries");
const opusscript = require("opusscript");

exports.run = (client, message, args) => {
  
  if (args.length === 0)
  return message.reply("Mana Nama Radionya");
	
    const prambors = "http://masima.rastream.com/masima-pramborsjakarta?";
	const patria = "http://www.radiopatria.net:8000/stream";
	const gen = "https://onlineradiobox.com/id/genjakarta/?cs=id.genjakarta&played=1";
	const gensbyradio = "http://1031gen.fm/streaming";
	const wijaya = "http://wijayafm.onlivestreaming.net:9880/live";
	const giri = "http://streaming.girifm.com:8010/;";
	const swaragama = "http://jkt.jogjastreamers.com:8000/swaragama456789stereo";
	const hardrock = "http://cloudstreaming.mramedia.com:8001/live";
	const indika = "http://103.16.199.177:9160/;stream.nsv";
	const mendhut = "http://streaming.mendhutfm.com:8790/stream?";
	const rws = "https://mediacp.xajist.com/Api/Url/Stream/RWS/;";
	const istara = "http://istarafm.onlivestreaming.net:10110/live";
	const ardan = "http://listento.ardanradio.com:1059/live";
	const matrix = "http://live.radiomatrixfm.com:8000/listen.pls";
	const djfm = "http://u.klikhost.com:8000/djfm";
	const rdi = "http://202.147.199.99:8000/stream/1/";
	const mayangkara = "http://streaming.mayangkara.net:8000/mayangkara-aacmed";
	
	
	
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
            connection.playArbitraryInput(`${gensbyradio}`);
          })
          .catch(console.log);
      }
	  
	  	else if((message.content == "!r wijaya") || (message.content == "!r wijayafm") || (message.content == "!r wijayafm surabaya")|| (message.content == "!r wijaya fm")){
        message.member.voiceChannel.join()
          .then(connection => {
            message.reply('Connected! Playing WIJAYAFM SURABAYA..');
            connection.playArbitraryInput(`${wijaya}`);
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
	  	  	  	  	  	else if((message.content == "!r wijangsongko") || (message.content == "!r rws") || (message.content == "!r rwsfm")|| (message.content == "!r radio wijangsongko")){
        message.member.voiceChannel.join()
          .then(connection => {
            message.reply('Connected! Playing WIJANGSONGKO FM KEDIRI..');
            connection.playArbitraryInput(`${rws}`);
          })
          .catch(console.log);
      }
	  
	  
	  	  	  	  	  	  	else if((message.content == "!r istara") || (message.content == "!r istarafm") || (message.content == "!r istarafmradio")|| (message.content == "!r radio istara")){
        message.member.voiceChannel.join()
          .then(connection => {
            message.reply('Connected! Playing ISTARA FM..');
            connection.playArbitraryInput(`${istara}`);
          })
          .catch(console.log);
      }
	  
	  	  	  	  	  	  	else if((message.content == "!r ardan") || (message.content == "!r ardanfm") || (message.content == "!r radioardan")|| (message.content == "!r radio ardan")){
        message.member.voiceChannel.join()
          .then(connection => {
            message.reply('Connected! Playing ARDAN FM..');
            connection.playArbitraryInput(`${ardan}`);
          })
          .catch(console.log);
      }
	  
	  	  	  	  	  	  	else if((message.content == "!r matrix") || (message.content == "!r matrixponorogo") || (message.content == "!r matrixfm")|| (message.content == "!r radio matrix")){
        message.member.voiceChannel.join()
          .then(connection => {
            message.reply('Connected! Playing MATRIX FM PONOROGO..');
            connection.playArbitraryInput(`${matrix}`);
          })
          .catch(console.log);
      }
	  
	  	  	  	  	  	  	else if((message.content == "!r djfm") || (message.content == "!r dj") || (message.content == "!r fmdj")|| (message.content == "!r radio djfm")){
        message.member.voiceChannel.join()
          .then(connection => {
            message.reply('Connected! Playing DJ FM..');
            connection.playArbitraryInput(`${djfm}`);
          })
          .catch(console.log);
      }
	  
	  	  	  	  	  	  	else if((message.content == "!r rdi") || (message.content == "!r dangdut indonesia") || (message.content == "!r rwsfm")|| (message.content == "!r radio dangdut indonesia")){
        message.member.voiceChannel.join()
          .then(connection => {
            message.reply('Connected! Playing RADIO DANGDDUT INDONESIA..');
            connection.playArbitraryInput(`${rdi}`);
          })
          .catch(console.log);
      }
	  
	  	  	  	  	  	  	else if((message.content == "!r mayangkara") || (message.content == "!r mayangkara blitar") || (message.content == "!r mayangkarafm")|| (message.content == "!r radio mayangkara")){
        message.member.voiceChannel.join()
          .then(connection => {
            message.reply('Connected! Playing MAYANGKARA FM BLITAR..');
            connection.playArbitraryInput(`${mayangkara}`);
          })
          .catch(console.log);
      }
	  
	  
	  else {
        message.reply('Nama Radio Salah');
      }
    };
  
