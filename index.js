// Classes nécéssaires au fonctionnement du bot
const { Client, Intents } = require('discord.js');
const { token } = require('./config.json');

// Créer une instance du bot
const client = new Client({ intents: [Intents.FLAGS.GUILDS]});

// Quand le client est instancier, démarrer cet évenement une fois
client.once('ready', () => {
    console.log(typeof token)
    client.user.setActivity("Échapper au tyran", {type: "PLAYING"})
});

// Connecter son client en utilsant le token
client.login(token);