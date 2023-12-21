require('dotenv').config();

const  {Client, IntentsBitField, MessageActionRow, MessageButton } = require('discord.js');
const translate = require('@iamtraction/google-translate');

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

client.on('interactionCreate', (interaction) => {
    if(!interaction.isChatInputCommand()) return;

    if (interaction.commandName === 'translation') {
        const language = interaction.options.getString('language');
        const text = interaction.options.getString('text');

        translate(text, {to: language}).then(res => {

            interaction.reply(`Here is your translated ${language} text: **${res.text}**`);
            
        })
        .catch(err => {
            console.error("Error during translation:", err);
        });
    }
    
});




client.login(process.env.TOKEN);