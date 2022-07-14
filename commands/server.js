const { SlashCommandBuilder } = require('@discordjs/builders');
const moment = require('moment')

module.exports = {

    data: new SlashCommandBuilder()
        .setName('server')
        .setDescription('Répond avec les informations du serveur !'),
    async execute(interaction) {
        await interaction.reply(`Nom du serveur: **${interaction.guild.name}**
        \nNombres de membres: **${interaction.guild.memberCount}**
        \nLe serveur a été créer le: **${moment(interaction.guild.createdAt).format('DD/MM/YY')}**`);
    }

}