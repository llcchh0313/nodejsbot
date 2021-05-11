module.exports = {
    name: "데가2",
    cooldown: 5,
    execute(message){
        const Discord = require('discord.js')
        const Embed = new Discord.MessageEmbed()
        message.reply(Embed.setTitle("답변").setDescription("Destiny 2").setColor("#FFFFF")/*.addField("핑","퐁")*/.setAuthor("개발자 지원").setFooter("개발자 지원").setImage("https://search.pstatic.net/sunny/?src=https%3A%2F%2Fi.pinimg.com%2Foriginals%2Fb6%2F9e%2F69%2Fb69e6909f2cc9b766f0325f24feae6f0.jpg&type=sc960_832"))
    }
}