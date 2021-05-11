module.exports = {
    name: "getroles",
    execute(message){
        message.member.roles.add('841495477471019048')
        message.member.setNickname(`[멍청이] ${message.member.user.username}`)
        message.reply("성공적으로 역할을 지급하고 별명을 변경하였습니다.")
    }
}