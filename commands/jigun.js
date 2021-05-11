module.exports = {
    name: "지건",
    execute(message){
        message.channel.send("하늘이 울리고..")
        message.channel.send("땅이 꺼진다..")
        message.channel.send("그이름은 바로..")
        message.channel.send("...")
        const Discord = require('discord.js')
        const Embed = new Discord.MessageEmbed()
        message.reply(Embed.setTitle("!!!지건!!!!").setDescription("지건좌 강림하다").setColor("#FFFFF")/*.addField("핑","퐁").setAuthor("개발자 지원").setFooter("개발자 지원")*/.setImage("https://cdn.discordapp.com/attachments/839087199982321718/841688903840038982/20210511_111733.jpg"))
    }
}