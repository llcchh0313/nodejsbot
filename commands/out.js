module.exports = {
    name: "간다",
    cooldown: 5,
    execute(message){
        const Discord = require('discord.js')
        const Embed = new Discord.MessageEmbed()
        message.reply(Embed/*.setTitle("답변")*/.setDescription("가버렸!").setColor("#FFFFF")/*.addField("핑","퐁").setAuthor("개발자 지원").setFooter("개발자 지원")*/.setImage("https://search.pstatic.net/common/?src=http%3A%2F%2Fshop1.phinf.naver.net%2F20180725_63%2Fqkftjwls%40naver.com_1532509575459EbXAU_JPEG%2F15140755114213440_229074914.jpg&type=sc960_832"))
    }
}