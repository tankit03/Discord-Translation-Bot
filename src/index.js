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

    // if(interaction.commandName === 'hey') {
    //      interaction.reply('hey!');
    // }
    // if (interaction.commandName === 'ping') {
    //      interaction.reply('pong!');
    // }
    if (interaction.commandName === 'spanish') {
        const text = interaction.options.getString('text');

        translate(text, {to: 'es'}).then(res => {

            interaction.reply(`Here is your Spanish translation 🇪🇸 : **${res.text}**`);
            
        })
        .catch(err => {
            console.error("Error during translation:", err);
        });
    }
    if (interaction.commandName === 'french') {
        const text = interaction.options.getString('text');

        translate(text, {to: 'fr'}).then(res => {

            interaction.reply(`Here is your French translation 🇫🇷 : **${res.text}**`);
            
        })
        .catch(err => {
            console.error("Error during translation:", err);
        });
    }
    if (interaction.commandName === 'hindi') {
        const text = interaction.options.getString('text');

        translate(text, {to: 'hi'}).then(res => {

            interaction.reply(`Here is your Hindi translation 🇮🇳 : **${res.text}**`);
            
        })
        .catch(err => {
            console.error("Error during translation:", err);
        });
    }
});




client.login(process.env.TOKEN);