module.exports = {
    name: "getroles",
    execute(message){
        message.member.roles.add('834791846235471913')
        message.member.setNickname(`[인증된] ${message.member.user.username}`)
        message.reply("성공적으로 역할을 지급하고 별명을 변경하였습니다.")
    }
}