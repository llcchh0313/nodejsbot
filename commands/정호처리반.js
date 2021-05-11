module.exports = {
    name: "?",
    execute(message){
        const Discord = require('discord.js')
        const Embed = new Discord.MessageEmbed()
        message.reply(Embed.setTitle("뭐지??")/*.setDescription("지건좌 강림하다")*/.setColor("#FFFFF")/*.addField("핑","퐁").setAuthor("개발자 지원").setFooter("개발자 지원")*/.setImage(""))
    }
}