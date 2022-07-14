// fs est la façon native pour node de chercher des fichier. Il ectend .map de JS mais en mieux
const fs = require('node:fs');
// path est la version native de chercher dans les dossier. Au lieu de mettre le nom complet on peux mettre path.join
const path = require('node:path');
// Classes nécéssaires au fonctionnement du bot
const { Client, Collection, Intents} = require('discord.js');
const { token } = require('./config.json');

// Créer une instance du bot
const client = new Client({ intents: [Intents.FLAGS.GUILDS]});

// Récupération de la route du dossier qui contiendra mes events
const eventsPath = path.join(__dirname, 'events');
// Récupération de chaques fichier js dans mon dossier
const eventFiles = fs.readdirSync(eventsPath).filter(file => file.endsWith('.js'));

for (const file of eventFiles) {
    //Récupération de chaque fichier et création du chemin complet en fusionnant le nom du dossier + du fichier
    const filePath = path.join(eventsPath, file);
    // Récupération de l'event via module.exports
    const event = require(filePath);

    // Si il y à spécifié que l'evenement n'a qu'une utilisation alors je l'éxecute une fois
    if (event.once) {
        //J'execute la commande en récupérant le type d'event qui est le nom, le listener qui sera notre paramètre et je l'execute
        client.once(event.name, (...args) => event.execute(...args));
    } else {
        client.on(event.name, (...args) => event.execute(...args));
    }
}

// Connecter son client en utilsant le token
client.login(token);