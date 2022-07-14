const { SlashCommandBuilder } = require('@discordjs/builders');
const moment = require("moment");

module.exports = {

    data: new SlashCommandBuilder()
        .setName('user')
        .setDescription("Répond avec les informations de l'utilisateur"),
    async execute(interaction) {
        await interaction.reply(`Pseudo: **${interaction.user.tag}**
        \nID: **${interaction.user.id}**
        \nCompte créer le: **${moment(interaction.user.createdAt).format('DD/MM/YY')}**`);
    }

}