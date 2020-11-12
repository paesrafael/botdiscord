module.exports = {
  name: 'kick',
  description: 'Remove a specific user',
  execute(message) {
    if (!message.mentions.users.size) {
      return message.reply('You need to tag a user to expel him')
    }

    if (!message.member.hasPermission('KICK_MEMBERS')) {
      return message.channel.send('You are not allowed')
    }
    
    let mentionMember = message.mentions.members.first()
    const member = message.guild.member(mentionMember)

    // if (!mentionMember) {
    //   return message.channel.send('You need to tell me who you want to expel')
    // }

    message.channel.send(`Byeee ${member.displayName}`)
    
    member.kick()
      .then(() => console.log(`kicked ${member.displayName}`))
      .catch(console.error)
  }
}