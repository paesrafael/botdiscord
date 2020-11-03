const fs = require('fs')
const Discord = require('discord.js')
const { token, prefix } = require('./config.json')

const client = new Discord.Client()
client.commands = new Discord.Collection()

const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'))

for (const file of commandFiles) {
  const command = require(`./commands/${file}`)

  client.commands.set(command.name, command)
}

client.on('ready', () => {
  console.log(`${client.user.tag} is online`)
})

client.on('message', (message) => {
  if (!message.content.startsWith(prefix) || message.author.bot) return

  const args = message.content.slice(prefix.length).trim().split(/ +/)
  const command = args.shift().toLowerCase()

  if (!client.commands.has(command)) return

  try {
    client.commands.get(command).execute(message, args)
  } catch (error) {
    console.error(error)
    message.reply('Ocorreu um erro ao tentar executar esse comando!')
  }
})

client.login(token)
