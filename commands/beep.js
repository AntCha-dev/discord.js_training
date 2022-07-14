const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {

    data: new SlashCommandBuilder()
        .setName('beep')
        .setDescription('Répond avec Boop !'),
    async execute(interaction) {
        await interaction.reply('Boop !');
    }

}