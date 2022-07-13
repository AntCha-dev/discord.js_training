const { SlashCommandBuilder } = require('@discordjs/builders');
const { REST } = require('@discordjs/rest');
const { Routes } = require('discord-api-types/v9')
//client iD = l'identifiant de mon bot discord et guildId l'identifiant du serveur cible
const { clientId, guildId, token } = require('./config.json')

const commands = [

    new SlashCommandBuilder().setName('ping').setDescription("Réponds avec Pong!")

].map(command => command.toJSON());

const rest = new REST({ version: '9' }).setToken(token);

rest.put(Routes.applicationGuildCommands(clientId, guildId), { body: commands })
    .then(() => console.log('Successfully registered application commands.'))
    .catch(console.error);

console.log(commands);