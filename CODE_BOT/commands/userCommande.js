const { SlashCommandBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('user')
        .setDescription('Affiche le nom de l\'utilisateur et sa date d\'arrivée sur le serveur'),
    async execute(interaction) {
        const userName = interaction.user.username;
        const joinDate = interaction.guild.members.cache.get(interaction.user.id).joinedAt;
        await interaction.reply(`L'utilisateur est : ${userName}. Il a rejoint le serveur le ${joinDate}.`);
    },
};
