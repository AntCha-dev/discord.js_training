module.exports = {
    name: 'interactionCreate',
    execute(interaction) {
        console.log(`${interaction.user.tag} dans le salon #${interaction.channel.name} a utiliser le bot`);
    }
}