const Discord = require('discord.js');
const client = new Discord.Client();
const newUsers = new Discord.Collection();
var prefix = ";";
const swearWords = ["fuck", "dick", "vagina", "pussy","nigger","faggot","cocksucker","asshole","fzuck","bitch","bastard","queer","sex","slut","whore","jerk","jizz","cunt","crap","shit"];

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

function isCommand(command, message) {
    var command = command.toLowerCase();
    var content = message.content.toLowerCase();
    return content.startsWith(prefix + command);
}

// General commands
client.on('message', message => {
    if (message.author.bot) return; // Dont answer yourself.
    var args = message.content.split(/[ ]+/)
	
let soruce = message
let guild = message.guild
let channels = guild.channels
var myChannel = channels.find("name", "backup")
var InformationChannel = channels.find("name", "information")
var ruleschannel = channels.find("name", "rules")
var logchannel = channels.find("name", "discord-logs")

  if (isCommand("invite", message)) {
    message.reply('Here is the invite link! https://discord.gg/RcRNcSQ');
  } else if (isCommand("backup", message)) {
	  message.delete();
     myChannel.send("@everyone" + (message.author) + " Is requesting backup at their server!");
  } else if (message.content === '$information')
	  InformationChannel.send({embed: {
    color: 3447003,
    author: {
      name: client.user.username,
      icon_url: client.user.avatarURL
    },
    title: "Information",
    url: " ",
    description: "This channel contains important Information and resources related to Diamond Security Firm.",
    fields: [{
        name: "What is Diamond Security Firm & what do they do?",
        value: "Diamond Security Firm is a privatly owned security company based in Washington D.C that provides security to contracted businesses and indivisuals that purchase a contract, We protect our clients and their property."
      },			
      {
        name: "Does Diamond Security Firm protect everyone or certain people?",
	  value: "Diamond Security Firm is avilable for anyone to purchase protection from as long as they are not a Federal Prisoner or are Arrest On Sight."
      },
      {
        name: "What is the job dutites of an employee at Diamond Security Firm?",
	  value: "The job dutites of an employee depends on their rank, Normal Security Guards are responsible for protecting contracted properties(Such as Wells Fargo Bank) & are also required to assist in securing protectee propeties when requested."
      },
      {
        name: "Is Diamond Security Firm currently hiring?",
	  value: "Diamond Security Firm is always on the lookout for new employees, We give priority hiring to those with military/Law Enforcement history. Job Applications can be found under our group games!"
      },
      {
        name: "Does Diamond Security Firm protect everyone or certain people?",
	  value: "Diamond Security Firm is avilable for anyone to purchase protection from as long as they are not a Federal Prisoner or are Arrest On Sight."
      },
      {
        name: "Where can I report an abusive employee or protectee?",
	  value: "Diamond Security Firm has a channel within the discord named (Public Relations Chat) where our Human Resource Department is able to work with you to investigate or fire an abusive employee or protectee."
      },
      {
        name: "Trello Links",
	  value: "[Main Board](https://trello.com/b/6sLI6fYh/dsf-main-board) [Human Resources](https://trello.com/b/DNvLH1Lo/diamond-security-firm-human-resoruces) | [Promotion Points](https://trello.com/b/2bcmzCVY/diamond-security-firm-promotion-board) | [Training & Education](https://trello.com/b/LwTSTcPN/diamond-security-firm-training-education)  "
      },
    ],
    timestamp: new Date(),
    footer: {
      icon_url: client.user.avatarURL,
      text: "© Diamond Security Firm"
    }
  }
}); 
else if (isCommand("Kick", message)) {
        let kUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
        if (!kUser) return message.channel.send("Can't find user!");
        let kReason = args.join(" ").slice(22);
        if (!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send("You do not have permisson to kick this person!");
        if (kUser.hasPermission("MANAGE_MESSAGES")) return message.channel.send("That person can't be kicked!");
        message.delete();

        const embed = new Discord.RichEmbed()
            .setTitle("Kicked User log")
            .setAuthor("Diamond Security Firm Bot", "https://cdn.discordapp.com/attachments/326761725875585025/589144795939602477/Untitled.png")
            .setColor(0x6FA8DC)
            .setDescription("This is a bot produced log for the ;kick command.")
            .setFooter("A user has been kicked", "https://cdn.discordapp.com/attachments/326761725875585025/589144795939602477/Untitled.png")
            .setTimestamp()
            .setURL("https://www.roblox.com/groups/2858260/Diamond-Security-Firm#!/about")
            .addField("Kicked User", `${kUser} with ID ${kUser.id}`)
            .addField("Kicked By", `<@${message.author.id}> with ID ${message.author.id}`)
            .addField("Kicked In", message.channel)
            .addField("Reason", kReason);

        if (!logchannel) return message.channel.send("Can't find admin-logs channel.");

        message.guild.member(kUser).kick(kReason);
        logchannel.send({
            embed
        })

        return;
    }
else if (message.content === '$rules')
	  ruleschannel.send({embed: {
    color: 3447003,
    author: {
      name: client.user.username,
      icon_url: client.user.avatarURL
    },
    title: "Server Rules",
    url: " ",
    description: "This channel contains our discord server rules.",
    fields: [{
        name: "Family Friendly",
        value: "All channels are considard Family Friendly meaning swearing is prohibited, NSFW is prohibited & anything that is deemed innapropriate is prohibited."
      },
      {
        name: "Rover",
	  value: "You must be verified through rover with your primary roblox account used for NUSA."
      },
	  {
	   name: "Argueing",
	  value: "If you have a personal issue with someone else, do not bring it to the server, keep it elsewhere"
	  },
	  {
	   name: "Professional at all times.",
	  value: "You must remain professional and treat this discord like you are in a workplace, Use proper grammar and be respectful to everyone."
	  },
	  {
	   name: "Warning",
	  value: "Breaking these rules may lead to a mute,kick or a ban from the discord server and from Diamond Security Firm"
	  },
    ],
    timestamp: new Date(),
    footer: {
      icon_url: client.user.avatarURL,
      text: "© DSF"
    }
  }
});
});
// Protectee Commands, Anti-Swear
client.on('message', message => {

let soruce = message
let guild = message.guild
let channels = guild.channels
var ProtectChannel = channels.find("name", "protection-request")
var mutechannel = channels.find("name", "muted")
var roleschannel = channels.find("name", "role-request")

  if (isCommand("requestprotection", message)) {
	  message.delete();
    ProtectChannel.send("@everyone" + " Protectee" + (message.author) + " Is requesting protection at their server!");
  } else if (isCommand("endprotection", message)) {
	  message.delete();
    ProtectChannel.send("@everyone" + " Protectee" + (message.author) + " has ended their protection request and no longer requires protection!");
  }  else if( swearWords.some(word => message.content.toLowerCase().includes(word)) ) {
 message.delete();
 message.reply("Swearing is against Diamond Security Firm Policy");
} else if (isCommand("knownthreats", message))
	  message.reply({embed: {
    color: 3447003,
    author: {
      name: client.user.username,
      icon_url: client.user.avatarURL
    },
    title: "Known Threats",
    url: "http://google.com",
    description: "Here are the current known threats " + (message.author) + ".",
    fields: [{
        name: "Horsiee",
        value: "Declared a known threat for attacking multiple Protectees & killing 3 Security Guards"
      },
      {
        name: "Add username here!",
	  value: "Add description here!"
      },
    ],
    timestamp: new Date(),
    footer: {
      icon_url: client.user.avatarURL,
      text: "© DSF"
    }
  }
});
else if (isCommand("Commands", message))
	  message.reply({embed: {
    color: 3447003,
    author: {
      name: client.user.username,
      icon_url: client.user.avatarURL
    },
    title: "Bot Commands",
    url: "http://google.com",
    description: "Here are the current commands!",
    fields: [{
        name: ";knownthreats",
        value: "Replies with a list of known threats."
      },
      {
        name: ";backup",
	  value: "Requests backup in #backup"
      },
	  {
        name: ";requestprotection",
	  value: "Allows Protectees to request protection at their server."
      },
	  {
        name: ";invite",
	  value: "Gives you an invite code for the server."
      },
	  {
        name: ";kick @username",
	  value: "Kicks the mentioned user from the discord, Must be Board of Directors or higher to execute."
      },
    ],
    timestamp: new Date(),
    footer: {
      icon_url: client.user.avatarURL,
      text: "© DSF"
    }
  }
});
else if (message.content === '$muted')
	  mutechannel.send({embed: {
    color: 3447003,
    author: {
      name: client.user.username,
      icon_url: client.user.avatarURL
    },
    title: "Muted",
    url: "http://google.com",
    description: "You have been muted, you can find information below.",
    fields: [{
        name: "Why am I muted?",
        value: "You are muted due to you have failed to follow our #rules and therefore a moderator has placed you here."
      },
      {
        name: "How do I get unmuted?",
	  value: "You will need to contact a Human Resource Officer or higher to be unmuted."
      },
	  {
        name: "What can I do while muted?",
	  value: "You cannot do anything while muted."
      },
    ],
    timestamp: new Date(),
    footer: {
      icon_url: client.user.avatarURL,
      text: "© DSF"
    }
  }
});
else if (message.content === '$roles')
	  roleschannel.send({embed: {
    color: 3447003,
    author: {
      name: client.user.username,
      icon_url: client.user.avatarURL
    },
    title: "role-request",
    url: "http://google.com",
    description: "This channel is only for requesting roles, freely speaking will lead to a suspension/server ban!",
    fields: [{
        name: "Format",
        value: "Use the format below, do not speak within the channel except for role requests!"
      },
      {
        name: "Roblox Username",
	  value: "This is so we can change your nickname on the server."
      },
	  {
        name: "Roblox Profile Link",
	  value: "This is so we can perform a background check on you."
      },
	  {
        name: "Rank in group",
	  value: "This is used to put you as the correct rank, lying will lead to Blacklist from Diamond Security Firm!"
      },
    ],
    timestamp: new Date(),
    footer: {
      icon_url: client.user.avatarURL,
      text: "© DSF"
    }
  }
});
});

//No swearing


client.login(process.env.BOT_TOKEN);
