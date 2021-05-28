const Discord = require ("discord.js")

exports.run = async (client, message) => {
  let embed = new Discord.MessageEmbed()
	.setColor('#0099ff')
	.setTitle('Gen  Help')
	.setDescription('Commands: \n /token \n /nitro  \n /disney \n /netflix \n robux cooming soon  \n Minecraft cooming soon \n psc cooming soon \n gta cooming soon \n  origin cooming soon \n Stream cooming soon \n emails cooming soon \n psn cooming soon ')
	.setTimestamp()

message.channel.send(embed);
}
module.exports.help = {
  name: 'help'
}
