const fs = require('node:fs');
const path = require('node:path');
const { REST } = require('@discordjs/rest');
const { Routes } = require('discord-api-types/v9')
// client iD = l'identifiant de mon bot discord et guildId l'identifiant du serveur cible
const { clientId, guildId, token } = require('./config.json')

// Créer un tableau de commandes
const commands = [];
// Indique le chemin de notre dossier de commandes
const commandsPath = path.join(__dirname, 'commands');
const commandFiles = fs.readdirSync(commandsPath).filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
    const filePath = path.join(commandsPath, file);
    const command = require(filePath);
    commands.push(command.data.toJSON());
}

const rest = new REST({ version: '9' }).setToken(token);

rest.put(Routes.applicationGuildCommands(clientId, guildId), { body: commands })
    .then(() => console.log('Les commences sont bien enregistrées'))
    .catch(console.error);