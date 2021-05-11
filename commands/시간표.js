module.exports = {
    name: "시간표",
    cooldown: 5,
    execute(message){
        const Discord = require('discord.js')
        const Embed = new Discord.MessageEmbed()
        message.reply(Embed/*.setTitle("답변")*/.setDescription("시간표").setColor("#FFFFF")/*.addField("이두희(농구)","326 584 8048").addField("이건우(댄스)","695 035 3603").addField("예경남(바둑.여)","328 930 7434").addField("최계성(바둑.남)","408 138 4797").addField("김규리(배구)","673 253 2060").addField("강경옥(요가)","611 003 8554").addField("임성환(티볼)","314 636 4465").addField("정의왕(풋살)","262 806 0318").setAuthor("개발자 지원").setFooter("개발자 지원").setImage("")*/)
    }
}