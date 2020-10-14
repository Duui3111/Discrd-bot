const { MessageEmbed } = require('discord.js');
const moment = require('moment');

const filterLevels = {
	DISABLED: 'Off',
	MEMBERS_WITHOUT_ROLES: 'No Role',
	ALL_MEMBERS: 'Everyone'
};

const verificationLevels = {
	NONE: 'None',
	LOW: 'Low',
	MEDIUM: 'Medium',
	HIGH: '(╯°□°）╯︵ ┻━┻',
	VERY_HIGH: '┻━┻ ﾐヽ(ಠ益ಠ)ノ彡┻━┻'
};

const regions = {
	brazil: 'Brazil',
	europe: 'Europe',
	hongkong: 'Hong Kong',
	india: 'India',
	japan: 'Japan',
	russia: 'Russia',
	singapore: 'Singapore',
	southafrica: 'South Africa',
	sydeny: 'Sydeny',
	'us-central': 'US Central',
	'us-east': 'US East',
	'us-west': 'US West',
	'us-south': 'US South'
};

module.exports = {
  name: "serverinfo",
  category: "info",
  aliases: ["si"],
  description:"Get serverinfo",
  usage: "serverinfo",
  run: async (client, message, args) => {  

    
  //   const roles = message.guild.roles.cache.sort((a, b) => b.position - a.position).map(role => role.toString());
  //   const members = message.guild.members.cache;
  //   const channels = message.guild.channels.cache;
  //   const emojis = message.guild.emojis.cache;

	//   const { guild } = message   
  //   const { name, region, memberCount, owner } = guild
  //   const icon = guild.iconURL()
  //   const embed = new Discord.MessageEmbed() 
  //   .setTitle(`Server info for ${name}`)
  //   .setThumbnail(icon)
  //   .addField('Region', region, true)
  //   .addField("Members", memberCount, true)
  //   .addField("Members Online", message.guild.members.cache.filter(message => message.user.presence.status == "online").size, true)
  //   .addField("Owner", owner.user.tag, true)
  //   .addField("Boost Tier", `${message.guild.premiumTier}`, 'None', true)
  //   .addField("Verification Level", message.guild.verificationLevel, true)
  //   .addField("Created", message.guild.createdAt.toUTCString().substr(0, 16) + " " + "(" + (checkDays(message.guild.createdAt)) + ")", true)
  //   .addField("Role Count", roles.length,true)
  //   .addField("Emoji Count", emojis.size,true)
  //   .addField("Regular Emoji Count", emojis.filter(emoji => !emoji.animated).size,true)
  //   .addField("Animated Emoji Count", emojis.filter(emoji => emoji.animated).size,true)
  //   .addField("Humans", members.filter(member => !member.user.bot).size)
  //   .addField("Bots", members.filter(member => member.user.bot).size,true)
  //   .addField("Text Channels", channels.filter(channel => channel.type === 'text').size,true)
  //   .addField("Voice Channels", channels.filter(channel => channel.type === 'voice').size,true)
  //   .addField("Boost Count:", message.guild.premiumSubscriptionCount || '0', true)

    
  //   message.channel.send(embed)
  // }  
  const roles = message.guild.roles.cache.sort((a, b) => b.position - a.position).map(role => role.toString());
  const members = message.guild.members.cache;
  const channels = message.guild.channels.cache;
  const emojis = message.guild.emojis.cache;

  const embed = new MessageEmbed()
    .setDescription(`**Guild information for __${message.guild.name}__**`)
    .setColor('BLUE')
    .setThumbnail(message.guild.iconURL({ dynamic: true }))
    .addField('General', [
      `**❯ Name:** ${message.guild.name}`,
      `**❯ ID:** ${message.guild.id}`,
      `**❯ Owner:** ${message.guild.owner.user.tag} (${message.guild.ownerID})`,
      `**❯ Region:** ${regions[message.guild.region]}`,
      `**❯ Boost Tier:** ${message.guild.premiumTier ? `Tier ${message.guild.premiumTier}` : 'None'}`,
      `**❯ Explicit Filter:** ${filterLevels[message.guild.explicitContentFilter]}`,
      `**❯ Verification Level:** ${verificationLevels[message.guild.verificationLevel]}`,
      `**❯ Time Created:** ${moment(message.guild.createdTimestamp).format('LT')} ${moment(message.guild.createdTimestamp).format('LL')} ${moment(message.guild.createdTimestamp).fromNow()}`,
      '\u200b'
    ])
    .addField('Statistics', [
      `**❯ Role Count:** ${roles.length}`,
      `**❯ Emoji Count:** ${emojis.size}`,
      `**❯ Regular Emoji Count:** ${emojis.filter(emoji => !emoji.animated).size}`,
      `**❯ Animated Emoji Count:** ${emojis.filter(emoji => emoji.animated).size}`,
      `**❯ Member Count:** ${message.guild.memberCount}`,
      `**❯ Humans:** ${members.filter(member => !member.user.bot).size}`,
      `**❯ Bots:** ${members.filter(member => member.user.bot).size}`,
      `**❯ Text Channels:** ${channels.filter(channel => channel.type === 'text').size}`,
      `**❯ Voice Channels:** ${channels.filter(channel => channel.type === 'voice').size}`,
      `**❯ Boost Count:** ${message.guild.premiumSubscriptionCount || '0'}`,
      '\u200b'
    ])
    .addField('Presence', [
      `**❯ Online:** ${members.filter(member => member.presence.status === 'online').size}`,
      `**❯ Idle:** ${members.filter(member => member.presence.status === 'idle').size}`,
      `**❯ Do Not Disturb:** ${members.filter(member => member.presence.status === 'dnd').size}`,
      `**❯ Offline:** ${members.filter(member => member.presence.status === 'offline').size}`,
      '\u200b'
    ])
    // .addField(`Roles [${roles.length - 1}]`, roles.length < 10 ? roles.join(', ') : roles.length > 10 ? client.utils.trimArray(roles) : 'None')
    .setTimestamp();
  message.channel.send(embed);
}
} 