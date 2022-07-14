// exporter le contenu de ce fichier dans nodegit
module.exports = {
    name: 'ready',
    once: true,
    execute(client) {
        console.log(`Je suis prêts ! Connecté en tant que ${client.user.tag}`)
    }
}