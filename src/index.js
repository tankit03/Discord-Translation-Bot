require('dotenv').config();

const  {Client, IntentsBitField } = require('discord.js');

const client = new Client ({
        intents: [
        IntentsBitField.Flags.Guilds, 
        IntentsBitField.Flags.GuildMembers,
        IntentsBitField.Flags.GuildMessages,
        IntentsBitField.Flags.MessageContent,
        ]

});

client.on('ready', (c) => {
    console.log(`:D ${c.user.displayName} is ready to go!`);
});

client.on('messageCreate', (message) => {
    if(message.author.bot) {
        return;
    }

    if(message.content === 'hello') {
        message.reply('hello there! I am a langauage translation bot !');
    }

});

client.login(process.env.TOKEN);