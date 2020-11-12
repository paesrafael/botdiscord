module.exports = {
  name: 'server',
  description: 'Get server information',
  execute(message) {
    message.channel.send(`Server name: ${message.guild.name} \nTotal members: ${message.guild.memberCount}`)

    // message.channel.send(`Your username: ${message.author.username}\nYour ID: ${message.author.id}`)
  }
}