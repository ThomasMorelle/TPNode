const { SlashCommandBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('info')
        .setDescription('Affiche des informations sur l\'utilisateur ou le serveur')
        .addSubcommand(subcommand =>
            subcommand
                .setName('user')
                .setDescription('Affiche des informations sur un utilisateur')
                .addUserOption(option =>
                    option.setName('utilisateur')
                        .setDescription('L\'utilisateur dont vous voulez voir les informations')
                )
        )
        .addSubcommand(subcommand =>
            subcommand
                .setName('server')
                .setDescription('Affiche des informations sur le serveur')
        ),
    async execute(interaction) {
        if (interaction.options.getSubcommand() === 'user') {
            const user = interaction.options.getUser('utilisateur') || interaction.user;
            const userName = user.username;
            const joinDate = interaction.guild.members.cache.get(user.id).joinedAt;
            await interaction.reply(`L'utilisateur est : ${userName}. Il a rejoint le serveur le ${joinDate}.`);
        } else if (interaction.options.getSubcommand() === 'server') {
            const serverName = interaction.guild.name;
            const memberCount = interaction.guild.memberCount;
            await interaction.reply(`Le serveur est : ${serverName}. Il compte ${memberCount} membres.`);
        }
    },
};
