require('dotenv').config();
const {REST, Routes, ApplicationCommandOptionType } = require('discord.js');

const commands = [ 

    {
        name: 'spanish',
        description: 'will translate english to spanish for you 🇪🇸 ',
        options: [
            {
                name: 'text',
                description: 'The text you want to translate to Spanish 🇪🇸',
                type: ApplicationCommandOptionType.String,
                required: true,
            },
        ],
    },
    {
        name: 'french',
        description: 'will translate english to French for you 🇫🇷 ',
        options: [
            {
                name: 'text',
                description: 'The text you want to translate to French 🇫🇷',
                type: ApplicationCommandOptionType.String,
                required: true,
            },
        ],
    },
    {
        name: 'hindi',
        description: 'will translate english to Hindi for you 🇮🇳 ',
        options: [
            {
                name: 'text',
                description: 'The text you want to translate to Hindi 🇮🇳',
                type: ApplicationCommandOptionType.String,
                required: true,
            },
        ],
    },

];

const rest = new REST({ version: '10'}).setToken(process.env.TOKEN);

((async () => {
    try {
        console.log('Started refreshing application (/) commands.');

        await rest.put(
            Routes.applicationGuildCommands(process.env.CLIENT_ID, process.env.GUILD_ID),
            { body: commands },
        );

        console.log('Slash commands successfully registered.');
    } catch (error) {
        console.error(error);
    }
})());

