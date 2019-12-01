const Discord = require('discord.js');
const client = new Discord.Client();
const newUsers = new Discord.Collection();
var prefix = ";";
const swearWords = ["fuck", "dick", "vagina", "pussy", "nigger", "asshole", "bitch", "bastard", "queer", "sex", "slut", "whore", "jerk", "jizz", "cunt", "crap", "shit"];

client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
});

function isCommand(command, message) {
    var command = command.toLowerCase();
    var content = message.content.toLowerCase();
    return content.startsWith(prefix + command);
}

// General commands
client.on("message", (message) => {
    if (message.author.bot) return; // Dont answer yourself.
    var args = message.content.split(/[ ]+/)

    let soruce = message
    let guild = message.guild
    let channels = guild.channels
    var ruleschannel = channels.find("name", "rules")


    if (message.content === '$rules')
        ruleschannel.send({
            embed: {
                color: 3447003,
                author: {
                    name: client.user.username,
                    icon_url: client.user.avatarURL
                },
                title: "Discord Rules",
                url: " ",
                description: "This channel contains the mafia creed and rules.",
                fields: [{
                        name: "Bullying",
                        value: "Bullying of any kind if prohibited on the Diamond Security Discord, Any form of bullying will result in being banned fron the discord and blacklisted from Diamond Security Firm."
                    },
                    {
                        name: "Professionalism",
                        value: "Anybody who uses the Diamond Security Discord must act in a professional workplace manner, Those who fail to do so will be fired or kicked from the discord."
                    },
                    {
                        name: "Nicknames",
                        value: "Your server nickname must match your Roblox username."
                    },
                    {
                        name: "Bot commands",
                        value: "All bot commands are to be used in #Bot-Commands"
                    },
                    {
                        name: "No speaking over each other",
                        value: "You must respect each person while they are speaking in a Voice Chat by not speaking over them while they are speaking."
                    },
                ],
                timestamp: new Date(),
                footer: {
                    icon_url: client.user.avatarURL,
                    text: "© DSF"
                  }
                }
            })
//Anti-Swear
client.on('message', message => {

            let soruce = message
            let guild = message.guild
            let channels = guild.channels

            if (swearWords.some(word => message.content.toLowerCase().includes(word))) {
                message.delete();
                message.reply("Swearing is not allowed in Diamond Security Discord");
            } else if (isCommand("Threatlist", message)) {
                message.reply({
                    embed: {
                        color: 3447003,
                        author: {
                            name: client.user.username,
                            icon_url: client.user.avatarURL
                        },
                        title: "Threat List",
                        url: "",
                        description: "Here is the current list of known threats " + (message.author) + ".",
                        fields: [{
                            name: "Enter name here",
                            value: "Enter Description here."
                        }, ],
                        timestamp: new Date(),
                        footer: {
                            icon_url: client.user.avatarURL,
                            text: "© DSF"
                        }
                    }
                })
            } else if (isCommand("Invite", message)) {
                message.reply("Here is the invite code you have requested. https://discord.gg/AGdECFY");
            } else if (isCommand("Threatlist", message)) {
                message.reply({
                    embed: {
                        color: 3447003,
                        author: {
                            name: client.user.username,
                            icon_url: client.user.avatarURL
                        },
                        title: "Threat List",
                        url: "",
                        description: "Here is the current list of known threats " + (message.author) + ".",
                        fields: [{
                            name: "Enter name here",
                            value: "Enter Description here."
                        }, ],
                        timestamp: new Date(),
                        footer: {
                            icon_url: client.user.avatarURL,
                            text: "© DSF"
                        }
                    }
                })
            } else if (isCommand("Commands", message)) {
                message.reply({
                    embed: {
                        color: 3447003,
                        author: {
                            name: client.user.username,
                            icon_url: client.user.avatarURL
                        },
                        title: "Bot Commands",
                        url: "",
                        description: "Here is a list of all bot commands that can be used" + (message.author) + " also please ensure to use #bot-commands.",
                        fields: [{
                                name: "Threatlist",
                                value: "Displays a list of threats to Diamond Security Firm Protectees"
                            },
                            {
                                name: "Invite",
                                value: "Displays a invite code for the Diamond Security Firm Discord."
                            },
                        ],
                        timestamp: new Date(),
                        footer: {
                            icon_url: client.user.avatarURL,
                            text: "© DSF"
                        }
                    }
                })
}
    client.login(process.env.BOT_TOKEN);
