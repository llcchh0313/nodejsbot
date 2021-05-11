const Discord = require('discord.js')
const client = new Discord.Client()
const {prefix, token} = require('./config.json')
const fs = require('fs')

client.commands = new Discord.Collection()

const cooldonws = new Discord.Collection()

const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'))

for(const file of commandFiles){
    const command = require(`./commands/${file}`)
    client.commands.set(command.name,command)
}

client.on('ready', () => {
  console.log("봇이 준비되었습니다.")
})
client.on('message', msg => {
    if(!msg.content.startsWith(prefix) || msg.author.bot) return
    const args = msg.content.slice(prefix.length).trim().split(/ +/)
    const commandName = args.shift()
    const command = client.commands.get(commandName)
    if(!command) return
    if(!cooldonws.has(command.name)){
        cooldonws.set(command.name,new Discord.Collection())
    }
    const now = Date.now()
    const timestamps = cooldonws.get(command.name)
    const cooldownAmount = (command.cooldown || 3)*1000
    if(timestamps.has(msg.author.id)){
        const expirationTime = timestamps.get(msg.author.id) + cooldownAmount
        if(now < expirationTime){
            const timeLeft = (expirationTime - now) / 1000
            return msg.reply(`${command.name} 해당 명령어를 사용하기 위해서는 ${timeLeft.toFixed(1)}초를 더 기다리셔야 합니다.`)
        }
    }
    timestamps.set(msg.author.id,now)
    setTimeout(()=> timestamps.delete(msg.author.id),cooldownAmount)
    try{
        command.execute(msg,args)
    }catch(error){
        console.log(error)
    }
})

client.login(token)