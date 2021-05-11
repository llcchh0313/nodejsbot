module.exports = {
    name: "스포츠",
    cooldown: 5,
    execute(message){
        const Discord = require('discord.js')
        const Embed = new Discord.MessageEmbed()
        message.reply(Embed/*.setTitle("답변")*/.setDescription("스포츠 시간").setColor("#FFFFF").addField("이두희(농구)","326 584 8048").addField("이건우(댄스)","695 035 3603").addField("예경남(바둑.여)","328 930 7434").addField("최계성(바둑.남)","408 138 4797").addField("김규리(배구)","673 253 2060").addField("강경옥(요가)","611 003 8554").addField("임성환(티볼)","314 636 4465").addField("정의왕(풋살)","262 806 0318")/*.setAuthor("개발자 지원").setFooter("개발자 지원").setImage("https://search.pstatic.net/sunny/?src=https%3A%2F%2Fi.pinimg.com%2Foriginals%2Fb6%2F9e%2F69%2Fb69e6909f2cc9b766f0325f24feae6f0.jpg&type=sc960_832")*/)
    }
}