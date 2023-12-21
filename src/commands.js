require('dotenv').config();
const {REST, Routes, ApplicationCommandOptionType } = require('discord.js');

const commands = [ 

    {
        name: 'translation',
        description: 'will translate english to any language for you 🌎 ',
        options: [
            {
                name: 'language',
                description: 'Pick the language you want to translate to 🌎',

                type: ApplicationCommandOptionType.String,
                required: true,
            },
            {
                name: 'text',
                description: 'The text you want to translate',
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

