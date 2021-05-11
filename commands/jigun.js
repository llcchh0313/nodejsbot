module.exports = {
    name: "지건",
    execute(message){
        message.channel.send("하늘이 울리고..")
        message.channel.send("땅이 꺼진다..")
        message.channel.send("그이름은 바로..")
        message.channel.send("...")
        const Discord = require('discord.js')
        const Embed = new Discord.MessageEmbed()
        message.reply(Embed.setTitle("!!!지건!!!!").setDescription("지건좌 강림하다").setColor("#FFFFF")/*.addField("핑","퐁").setAuthor("개발자 지원").setFooter("개발자 지원")*/.setImage("https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMTAxMTFfODAg%2FMDAxNjEwMzcwOTIxNTAy.Uu6nTrHtQwvE7uOgDlgm0t2E1_ujODtTE5No8jSMCK8g.2vhVphFHjnEQK9mjzuCu6UEbMZPu5GhX_6WOuNKPFEcg.JPEG.rara4000%2Fhqdefault.jpg&type=sc960_832"))
    }
}