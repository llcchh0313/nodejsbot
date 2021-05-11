const { MessageAttachment } = require("discord.js")

module.exports = {
    name: "clear",
    execute(message,args){
        if(isNaN(args[0])) return message.reply("올바른 값을 입력해주세요")
        const MessageCount = parseInt(args[0])
        if(MessageCount < 0 || MessageCount > 99) return message.reply("1 에서 100 미만의 수를 입력해주세요")
        message.channel.bulkDelete(MessageCount + 1).then((count)=>{
            message.reply(`성공적으로 ${count.size}개의 메세지를 삭제하였습니다`).then((message)=>{
                setTimeout(()=>{message.delete()},2000)
            })
        }).catch((error)=>{
            message.reply(`오류가 발생하였습니다\n오류 내용 : ${error}`)
        })
    }
}