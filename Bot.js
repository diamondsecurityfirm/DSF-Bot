const Discord = require('discord.js');
const client = new Discord.Client();
const newUsers = new Discord.Collection();
const swearWords = ["fuck", "dick", "vagina", "pussy","nigger","asshole","bitch","bastard","queer","sex","slut","whore","jerk","jizz","cunt","crap","shit"];

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});
// General commands
client.on('message', message => {
	
let soruce = message
let guild = message.guild
let channels = guild.channels
var myChannel = channels.find("name", "backup")
var InformationChannel = channels.find("name", "information")
var ruleschannel = channels.find("name", "rules")

  if (message.content === ';invite') {
    message.reply('Here is the invite link! https://discord.gg/u59zCrR');
  } else if (message.content === ';backup') {
	  message.delete();
     myChannel.send("@Security Guard" + (message.author) + " Is requesting backup at their server!");
  } else if (message.content === '$information')
	  InformationChannel.send({embed: {
    color: 3447003,
    author: {
      name: client.user.username,
      icon_url: client.user.avatarURL
    },
    title: "Information",
    url: "http://google.com",
    description: "This channel contains important Information about resources within the Diamond Security Firm.",
    fields: [{
        name: "Trello Boards",
        value: "At Diamond Security Firm we have lot's of trello boards for many uses which you can find below."
      },
      {
        name: "Trello Links",
	  value: "[Main Board](https://trello.com/b/6sLI6fYh/dsf-main-board) [Human Resources](https://trello.com/b/DNvLH1Lo/diamond-security-firm-human-resoruces) | [Promotion Points](https://trello.com/b/2bcmzCVY/diamond-security-firm-promotion-board) | [Training & Education](https://trello.com/b/LwTSTcPN/diamond-security-firm-training-education)  "
      },
    ],
    timestamp: new Date(),
    footer: {
      icon_url: client.user.avatarURL,
      text: "© DSF"
    }
  }
}); 
else if (message.content === '$rules')
	  ruleschannel.send({embed: {
    color: 3447003,
    author: {
      name: client.user.username,
      icon_url: client.user.avatarURL
    },
    title: "Server Rules",
    url: "http://google.com",
    description: "This channel contains important server rules.",
    fields: [{
        name: "No Swearing",
        value: "At Diamond Security Firm we wish to protect those who are under 13 by not allowing swear words."
      },
      {
        name: "Roblox Nickname",
	  value: "Your nickname should be exactly as it appears on roblox."
      },
	  {
	   name: "Private issues and/or matters are private",
	  value: "If you have a personal issue with someone else, do not bring it to the server, keep it elsewhere"
	  },
	  {
	   name: "Professional at all times.",
	  value: "You must remain professional and treat this discord like you are in a workplace, Use proper grammar!"
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
if(message.content == "mention") {

let soruce = message
let guild = message.guild
let channels = guild.channels
var ProtectChannel = channels.find("name", "protection")
var announcementchannel = channels.find("name", "announcements")
var roleschannel = channels.find("name", "role-request")
var SPDrole= message.channel.server.roles.get('Specialized Protection Division', 'SPDrole');



  if (message.content === ";requestprotection") {
	  message.delete();
    ProtectChannel.send(SPDrole.mention() + " Protectee" + (message.author) + " Is requesting protection at their server!");
  } else if (message.content === ";endprotection") {
	  message.delete();
    ProtectChannel.send("@Specialized Protection Division " + "  Protectee" + (message.author) + " has ended their protection request and no longer requires protection!");
  }  else if( swearWords.some(word => message.content.toLowerCase().includes(word)) ) {
 message.delete();
 message.reply("Swearing is against Diamond Security Firm Policy");
} else if (message.content === ';knownthreats')
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
else if (message.content === ';commands')
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
    ],
    timestamp: new Date(),
    footer: {
      icon_url: client.user.avatarURL,
      text: "© DSF"
    }
  }
});
else if (message.content === '$announcement')
	  announcementchannel.send({embed: {
    color: 3447003,
    author: {
      name: client.user.username,
      icon_url: client.user.avatarURL
    },
    title: "Announcements",
    url: "http://google.com",
    description: "After you are done announcing you must delete the announcement within 24 hours or risk suspension!",
    fields: [{
        name: "Rules",
        value: "Below are the rules for announcements"
      },
      {
        name: "Off-topic",
	  value: "If your announcement is not related to NUSA or it is an announcement for a campaign you may not post it."
      },
	  {
        name: "On-topic",
	  value: "You may post any announcement related to Diamond Security Firm and NUSA (If important)."
      },
	  {
        name: "Swearing",
	  value: "As per server rules you may not use swear words in your announcement."
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
});

//No swearing


client.login(process.env.BOT_TOKEN);

