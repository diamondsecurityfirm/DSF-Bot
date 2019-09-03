const Discord = require('discord.js');
const client = new Discord.Client();
const newUsers = new Discord.Collection();
const swearWords = ["fuck", "dick", "vagina", "pussy", "nigger", "asshole", "bitch", "bastard", "queer", "sex", "slut", "whore", "jerk", "jizz", "cunt", "crap", "shit"];

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

    if (message.content === '$information')
        InformationChannel.send({
            embed: {
                color: 3447003,
                author: {
                    name: client.user.username,
                    icon_url: client.user.avatarURL
                },
                title: "Information",
                url: " ",
                description: "This channel contains important Information and resources related to The Washington Mafia.",
                fields: [{
                        name: "What is the washington mafia?",
                        value: "The Washington Mafia is one of the crime families within the state of washington."
                    },
                    {
                        name: "What does The Washington Mafia do?",
                        value: "The Washington Mafia conducts raids and robberies throughout the state of washington and tries to control the underground."
                    },
                    {
                        name: "How do I become apart of the Family?",
                        value: "Become friends with the Boss and earn the mafia's trust and respect by doing jobs for us."
                    },
                    {
                        name: "How do I know if I'm part of the Mafia?",
                        value: "You will have a the role Mafia Member under your name in this discord."
                    },
                    {
                        name: "What are the ranks of the mafia and what does each rank do?",
                        value: "If you are part of the Mafia you will be able to check #RankStructure channel."
                    },
                    {
                        name: "Can I hire the mafia to do my dity work?",
                        value: "The mafia will do almost anything for the right price."
                    },
                    {
                        name: "What happens to people who doublecross/betray the mafia?",
                        value: "The mafia will make their life, lets say uncomfortable until they pay for what they have done."
                    },
                ],
                timestamp: new Date(),
                footer: {
                    icon_url: client.user.avatarURL,
                    text: "© The Washington Mafia"
                }
            }
        });
    else if (message.content === '$rules')
        ruleschannel.send({
            embed: {
                color: 3447003,
                author: {
                    name: client.user.username,
                    icon_url: client.user.avatarURL
                },
                title: "Mafia Creed and Rules",
                url: " ",
                description: "This channel contains the mafia creed and rules.",
                fields: [{
                        name: "Mafia Creed",
                        value: "As a member of the mafia I will risk my life and all my proptery to protect the Mafia and it's intrests & will alert the Boss of anything that may bring harm to the mafia."
                    },
                    {
                        name: "Chain of Command",
                        value: "I will listen to anyone who is of higher rank to me and will report any issues/concerns to a Captain who will in turn report it to the Underboss."
                    },
                    {
                        name: "Argueing",
                        value: "If you have a personal issue with someone else, either settle the issue or get out of the mafia."
                    },
                    {
                        name: "Secrets remain secrets",
                        value: "Secrets are to remain within the mafia and nowhere else, examples of secrets is [Mafia's Base location, who is in the mafia, planned raids/robberies]."
                    },
                    {
                        name: "Spying",
                        value: "If caught spying on the Mafia or releasing secrets you will be banned from the mafia and all your bases will be raided, you will be hunted every day."
                    },
                ],
                timestamp: new Date(),
                footer: {
                    icon_url: client.user.avatarURL,
                    text: "© The Washington Mafia"
                }
            }
        });
});
//Anti-Swear
client.on('message', message => {

            let soruce = message
            let guild = message.guild
            let channels = guild.channels

            if (swearWords.some(word => message.content.toLowerCase().includes(word))) {
                message.delete();
                message.reply("Swearing is not allowed in text channels");
            } else if (message.content === ';Roblist')
                message.reply({
                    embed: {
                        color: 3447003,
                        author: {
                            name: client.user.username,
                            icon_url: client.user.avatarURL
                        },
                        title: "Mafia Rob List",
                        url: "",
                        description: "Here is the current list of people to rob " + (message.author) + " also make sure to send the Boss a photo/video of the completed robbery.",
                        fields: [{
                                name: "[BH] Bambi",
                                value: "Bambi is a member of [BH] and also arrested the Boss, is to be robbed for everything you can rob him for"
                            },
                            {
                                name: "Yuki",
                                value: "Swat Officer who assisted in the arrest of the Boss, is to be robbed for everything you can rob him for"
                            },
                        ],
                        timestamp: new Date(),
                        footer: {
                            icon_url: client.user.avatarURL,
                            text: "© The Washington Mafia"
                        }
                    }
                });
            else if (message.content === ';Raidlist')
                message.reply({
                    embed: {
                        color: 3447003,
                        author: {
                            name: client.user.username,
                            icon_url: client.user.avatarURL
                        },
                        title: "Mafia Raid List",
                        url: "",
                        description: "Here is the current list of people to raid " + (message.author) + " also make sure to send the Boss a photo/video of the completed raid & loot.",
                        fields: [{
                            name: "[BH] Bambi",
                            value: "Bambi is a member of [BH] and also arrested the Boss, his base is to be found and raided, take all the loot to loot room for mafia stockpile"
                        }, ],
                        timestamp: new Date(),
                        footer: {
                            icon_url: client.user.avatarURL,
                            text: "© The Washington Mafia"
                        }
                    }
                });  else if (message.content === ';commands')
                message.reply({
                    embed: {
                        color: 3447003,
                        author: {
                            name: client.user.username,
                            icon_url: client.user.avatarURL
                        },
                        title: "Bot Commands",
                        url: "",
                        description: "Here are the current commands!",
                        fields: [{
                                name: ";Roblist",
                                value: "Replies with a list of people to rob."
                            },
                            {
                                name: ";Raidlist",
                                value: "Replies with a list of people to raid."
                            },
                        ],
                        timestamp: new Date(),
                        footer: {
                            icon_url: client.user.avatarURL,
                            text: "© The Washington Mafia"
                        }
                    }
                });

            client.login(process.env.BOT_TOKEN);
