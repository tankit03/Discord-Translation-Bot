# Multilingual Discord Translator Bot

## Description:

Within Discord servers, this Discord bot offers translation services. It can use the Google Cloud Translation API to translate text into a number of different languages. By removing language barriers, the bot improves communication amongst Discord users and is perfect for diverse, global communities.

## Features

- **Translation Command**: By indicating the destination language and the text they wish to have translated, users can request translations.
- **Support for Multiple Languages**: The bot supports multiple languages by utilizing the Google Cloud Translation API.

## Technologies Used

- **Node.js**: The bot is built on Node.js, providing a robust environment for backend development.
- **Discord.js**: This powerful library allows for easy interaction with the Discord API.
- **Google Cloud Translation API**: Utilized for accurate and efficient text translation.
- **dotenv**: Manages environment variables for secure configuration.

## Setup and Installation

### Prerequisites

- Node.js installed on your system.
- A Discord bot token (obtainable from the Discord Developer Portal).
- Access to the Google Cloud Translation API, with an API key.

### Installation Steps

1. **Clone the Repository**: Clone this repository to your local machine or download the source code.
2. **Install Dependencies**: Run `npm install` in the project directory to install necessary dependencies.
3. **Environment Variables**: Create a `.env` file in the root of your project and add the following variables:

TOKEN=Your_Discord_Bot_Token
CLIENT_ID=Your_Discord_Client_ID
GUILD_ID=Your_Discord_Guild_ID

### Running the Bot

1. **Start the Bot**: In your terminal, navigate to the bot's directory and run `node index.js`.
2. **Interact with the Bot**: In your Discord server, use the `/translation` command followed by the `language` and `text` parameters to translate text.

## Usage Example

- **Command Format**: `/translation language [target language code] text [text to translate]`
- **Example**: `/translation language es text Hello, world!`

This command will translate "Hello, world!" into Spanish.

