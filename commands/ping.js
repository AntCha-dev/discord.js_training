// Appeler l'object SlashCommandBuilder
const { SlashCommandBuilder } = require('@discordjs/builders');

// module.exports défini comment on va esporter nos données dans node afin de pouvoir les utilsier dans d'autres fichiers.
module.exports = {
    // On défini ce que va contenir l'exportation, dans notre cas on instacie la création d'une commande qui correspondra à data
    data: new SlashCommandBuilder()
        .setName('ping')
        .setDescription('Répond avec Pong !'),
    // Le code qui correspondra à ce que la commande executera se retrouve dans execute
    async execute(interaction) {
        await interaction.reply('Pong !');
    }

}