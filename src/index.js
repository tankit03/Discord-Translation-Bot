const  {Client, IntentsBitField } = require('discord.js');

const client = new Client ({
        intents: [
        IntentsBitField.Flags.Guilds, 
        IntentsBitField.Flags.GuildMembers,
        IntentsBitField.Flags.GuildMessages,
        IntentsBitField.Flags.MessageContent,
        ]

});

client.login('MTE4NjgzMDYwNTM4NDY5NTkwOQ.GJUkMi.0rNsjyQb0GPD5kX3PYSbeKUvSKcmMFYHb5bvYg');