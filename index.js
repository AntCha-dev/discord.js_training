// fs est la façon native pour node de chercher des fichier. Il ectend .map de JS mais en mieux
const fs = require('node:fs');
// path est la version native de chercher dans les dossier. Au lieu de mettre le nom complet on peux mettre path.join
const path = require('node:path');
// Classes nécéssaires au fonctionnement du bot
const { Client, Collection, Intents} = require('discord.js');
const { token } = require('./config.json');

// Créer une instance du bot
const client = new Client({ intents: [Intents.FLAGS.GUILDS]});

// J'inique que les commandes seront stockés dans une collections
client.commands = new Collection();

// Indique le chemin de notre dossier de commandes
const commandsPath = path.join(__dirname, 'commands');
// Avec fs.readdirSync, j'inqiue de chercher tout les fichier dans le dossier commandes, et je les filtres pour ne récupéré
// que les ficher .js
const commandFiles = fs.readdirSync(commandsPath).filter(file => file.endsWith('.js'));

for (const file of commandFiles) {

    // Récupération de tout les fichier js du dossier commands
    const filePath = path.join(commandsPath, file);
    // Récupération de toute la data des commandes
    const command = require(filePath);

    // Assignation de la data des commandes à leurs nom
    client.commands.set(command.data.name, command);

}

// Quand le client est instancié, démarrer cet évenement une fois
client.once('ready', () => {
    console.log('Je suis prêts !');
    client.user.setActivity("Échapper au tyran", {type: "PLAYING"});
});


// execute du l'action quand une interaction est créé
client.on('interactionCreate', async interaction => {

    //Si l'intéraction n'est pas une commande il ne return rien et on sort de l'action
    if (!interaction.isCommand()) return;

    const command = client.commands.get(interaction.commandName);

    // Si je n'ai pas une commande alors je sort de l'action et n'execute pas la suite
    if (!command) return;

    // Si je récupère une commande, j'essaie de l'executer
    try {
        await command.execute(interaction);
    } catch (error) {

        console.log(error);
        await interaction.reply({content: "Il y à eu une erreur pendant l'execution de la commande", ephemeral: true})

    }
});

// Connecter son client en utilsant le token
client.login(token);