const { SlashCommandBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('server')
        .setDescription('Affiche le nom du serveur et son nombre de membres'),
    async execute(interaction) {
        const serverName = interaction.guild.name;
        const memberCount = interaction.guild.memberCount;
        await interaction.reply(`Le serveur est : ${serverName}. Il compte ${memberCount} membres.`);
    },
};
